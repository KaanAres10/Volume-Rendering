import { InterpolationMethod } from './Types';
import * as d3Scale from 'd3-scale';
import * as d3Color from 'd3-color';
import * as d3Interpolate from 'd3-interpolate';
import objectAssignDeep from 'object-assign-deep';
import { getColorFromColorMapAt } from './convert';
import Container from './Container';
/**
 * This creates an editor to create transparency mappings.
 *
 * @example
 *   const te = new TransparencyEditor("#te", {
 *      initialAlphaStops: [
 *        { stop: 0, alpha: 0 },
 *        { stop: 0.5, alpha: 0.5 },
 *        { stop: 1, alpha: 1 }
 *      ]
 *   });
 *
 *   te.addListener((transparencyEditor) => {
 *     console.log(transparencyEditor.getAlphaStops());
 *     // output:
 *     // [
 *     //   { stop: 0, alpha: 0 },
 *     //   { stop: 0.5, alpha: 0.5 },
 *     //   { stop: 1, alpha: 1 }
 *     // ]
 *   });
 */
export class TransparencyEditor extends Container {
    /**
     * Creates a new transparency editor inside the given container.
     *
     * @param container Either an HTMLElement or a query string to an element, in which the editor will be embedded.
     * @param options   Can be used to configure the transparency editor. See {@link TransparencyEditorOptions}.
     */
    constructor(container, options) {
        super(container);
        /** This gets called, when the transparency changes to notify users of this library. */
        this.callbacks = new Map();
        this.callbackCounter = 0;
        // Set all defaults.
        const defaultOption = {
            initialAlphaStops: [
                { stop: 0, alpha: 0 },
                { stop: 0.5, alpha: 0.5 },
                { stop: 1, alpha: 1 },
            ],
            initialColorMap: {
                colorStops: [
                    { stop: 0, color: 'black' },
                    { stop: 1, color: 'black' },
                ],
                interpolationMethod: InterpolationMethod.RGB,
            },
            controlPointSize: 7,
            showAlphaGrid: true,
            alphaGridSize: 8,
        };
        // Merge the options with the defaults.
        // !!! DON'T USE options AND defaultOptions AFTER THIS LINE !!!
        const finalOptions = objectAssignDeep(defaultOption, options);
        this.alphaStops = finalOptions.initialAlphaStops;
        this.sortControlPoints();
        this.colorMap = finalOptions.initialColorMap;
        this.controlPointSize = finalOptions.controlPointSize;
        this.showAlphaGrid = finalOptions.showAlphaGrid;
        this.alphaGridSize = finalOptions.alphaGridSize;
        this.parent.classList.add('tfe-transparency-editor');
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.parent.clientWidth;
        this.canvas.height = this.parent.clientHeight;
        this.canvas.style.imageRendering = 'pixelated';
        this.parent.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.updateAlphaRange();
        this.draw();
        this.addEventListeners();
    }

    setStops(alphaStops) {
        this.setAlphaStops(alphaStops);
    }

    /**
     * Register a callback that gets called, when the transfer function changes. The callback gets called once
     * immediately.
     *
     * @param callback The function that gets called whenever the transfer function changes.
     */
    addListener(callback) {
        const id = this.callbackCounter++;
        this.callbacks.set(id, callback);
        callback(this);
        return id;
    }
    /** Removes the listener with the given id. */
    removeListener(id) {
        this.callbacks.delete(id);
    }
    /** Returns the complete transfer function including the alpha values and the color map. */
    getTransferFunction() {
        return { alphaStops: this.alphaStops, colorMap: this.colorMap };
    }
    /** Returns the color, excluding transparency, at the given stop. */
    getRGB(stop) {
        return getColorFromColorMapAt(this.colorMap, stop);
    }
    /** Returns the alpha value at the given stop. */
    getAlpha(stop) {
        return this.alphaRange(stop);
    }
    /** Returns the color, including transparency, at the given stop. */
    getRGBA(stop) {
        const color = d3Color.rgb(this.getRGB(stop));
        color.opacity = this.getAlpha(stop);
        return color.formatHex8();
    }
    /** Adds a control point at the given stop with the given alpha value. */
    addControlPoint(stop, alpha) {
        this.alphaStops.push({ stop, alpha });
        this.sortControlPoints();
        this.updateAlphaRange();
        this.sendUpdate();
        this.draw();
    }
    /** Remove a control point at the given pixel coordinates. */
    removeControlPointAt(x, y) {
        let indexToDelete = -1;
        for (let i = 1; i < this.alphaStops.length - 1; i++) {
            const controlPoint = this.alphaStops[i];
            const dx = controlPoint.stop * this.canvas.width - x;
            const dy = (1 - controlPoint.alpha) * this.canvas.height - y;
            if (Math.sqrt(dx * dx + dy * dy) < this.controlPointSize) {
                indexToDelete = i;
                break;
            }
        }
        if (indexToDelete !== -1) {
            this.alphaStops.splice(indexToDelete, 1);
            this.updateAlphaRange();
            this.sendUpdate();
            this.draw();
        }
    }
    /** Get the alpha stops. */
    getAlphaStops() {
        return this.alphaStops;
    }
    /** Replace the existing alpha stops with new ones. */
    setAlphaStops(alphaStops) {
        this.alphaStops = alphaStops;
        this.sortControlPoints();
        this.updateAlphaRange();
        this.sendUpdate();
        this.draw();
    }
    /** Get the current color map. */
    getColorMap() {
        return this.colorMap;
    }
    /** Set a new color map. */
    setColorMap(colorMap) {
        this.colorMap = colorMap;
        this.sendUpdate();
        this.draw();
    }
    /** This function notifies all listeners to this transparency editor. */
    sendUpdate() {
        this.callbacks.forEach((value) => value(this));
    }
    /** Generate a new d3 range. */
    updateAlphaRange() {
        this.alphaRange = d3Scale
            .scaleLinear()
            .domain(this.alphaStops.map((entry) => entry.stop))
            .range(this.alphaStops.map((entry) => entry.alpha))
            .interpolate(d3Interpolate.interpolateNumber);
    }
    /** Draws the transfer function, the control points, and the transparency grid into the canvas. */
    draw() {
        // Clear the drawing area.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // If the alpha grid is enabled we draw it.
        if (this.showAlphaGrid) {
            this.ctx.fillStyle = '#CACACA';
            for (let y = 0; y < this.canvas.height / this.alphaGridSize; y++) {
                for (let x = 0; x < this.canvas.width / this.alphaGridSize; x++) {
                    if ((x % 2 == 0 && y % 2 == 0) || (x % 2 == 1 && y % 2 == 1)) {
                        this.ctx.fillRect(x * this.alphaGridSize, y * this.alphaGridSize, this.alphaGridSize, this.alphaGridSize);
                    }
                }
            }
        }
        // Draw the color gradient.
        for (let i = 0; i < this.canvas.width; ++i) {
            const alpha = this.getAlpha(i / (this.canvas.width - 1));
            this.ctx.fillStyle = this.getRGBA(i / (this.canvas.width - 1));
            this.ctx.fillRect(i, (1 - alpha) * this.canvas.height, 1, alpha * this.canvas.height);
            if (this.showAlphaGrid) {
                this.ctx.clearRect(i, 0, 1, (1 - alpha) * this.canvas.height);
            }
        }
        // Draw the lines between points.
        this.ctx.strokeStyle = 'black';
        this.ctx.beginPath();
        for (let i = 0; i < this.alphaStops.length; i++) {
            const x = this.alphaStops[i].stop * this.canvas.width;
            const y = (1 - this.alphaStops[i].alpha) * this.canvas.height;
            if (i === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();
        // Draw the control points.
        this.ctx.fillStyle = 'white';
        for (let i = 0; i < this.alphaStops.length; i++) {
            const x = this.alphaStops[i].stop * this.canvas.width;
            const y = (1 - this.alphaStops[i].alpha) * this.canvas.height;
            this.ctx.strokeStyle = 'black';
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.controlPointSize, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
        }
    }
    /** Helper function to ensure all control points are in the correct order. */
    sortControlPoints() {
        this.alphaStops.sort((a, b) => a.stop - b.stop);
    }
    /** This helper function calculates which pixels correspond to which stop and alpha value. */
    pixelToNormalized(x, y) {
        const stop = Math.max(0, Math.min(1, x / this.canvas.width));
        const alpha = Math.max(0, Math.min(1, 1 - y / this.canvas.height));
        return { stop, alpha };
    }
    /** Adds event listeners for creating, moving and deleting control points. */
    addEventListeners() {
        // Tracks if the user is currently dragging a control point.
        let isDragging = false;
        // The index of the currently dragged control point.
        let dragIndex = -1;
        // The AbortController is for removing the mousemove listener from the document, when the user stops dragging.
        let abortController = null;
        /**
         * This function checks if a control point was selected, sets the dragIndex and isDragging fields and attaches a
         * mouse move listener to the document. This allows for more consistent control.
         */
        const checkDragStart = (e) => {
            // Figure out which control point was selected.
            dragIndex = -1;
            for (let i = 0; i < this.alphaStops.length; i++) {
                const controlPoint = this.alphaStops[i];
                const dx = controlPoint.stop * this.canvas.width - e.offsetX;
                const dy = (1 - controlPoint.alpha) * this.canvas.height - e.offsetY;
                if (Math.sqrt(dx * dx + dy * dy) < this.controlPointSize) {
                    dragIndex = i;
                    isDragging = true;
                    break;
                }
            }
            if (isDragging) {
                // Attach a mouse move listener to the document.
                abortController = new AbortController();
                document.addEventListener('mousemove', (e) => {
                    e.preventDefault();
                    const offsetX = e.clientX - this.canvas.getBoundingClientRect().x;
                    const offsetY = e.clientY - this.canvas.getBoundingClientRect().y;
                    const { stop, alpha } = this.pixelToNormalized(offsetX, offsetY);
                    if (dragIndex === 0) {
                        this.alphaStops[dragIndex].alpha = alpha;
                    }
                    else if (dragIndex === this.alphaStops.length - 1) {
                        this.alphaStops[dragIndex].alpha = alpha;
                    }
                    else {
                        const leftBound = this.alphaStops[dragIndex - 1].stop + Number.EPSILON;
                        const rightBound = this.alphaStops[dragIndex + 1].stop - Number.EPSILON;
                        this.alphaStops[dragIndex].stop = Math.max(leftBound, Math.min(rightBound, stop));
                        this.alphaStops[dragIndex].alpha = alpha;
                    }
                    this.updateAlphaRange();
                    this.sendUpdate();
                    this.draw();
                }, { signal: abortController.signal });
            }
        };
        // This listener is responsible for:
        //  - Starting dragging a control point, if one was pressed on with the left mouse button.
        //  - Adding a control point if the left mouse button was pressed anywhere else (also starts dragging the newly
        //    created point).
        //  - Removing a control point on right click.
        this.canvas.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                // Left click
                checkDragStart(e);
            }
            if (isDragging) {
                return;
            }
            if (e.button === 0) {
                // Left click
                const { stop, alpha } = this.pixelToNormalized(e.offsetX, e.offsetY);
                this.addControlPoint(stop, alpha);
                checkDragStart(e);
            }
            else if (e.button === 2) {
                // Right click
                e.preventDefault();
                this.removeControlPointAt(e.offsetX, e.offsetY);
            }
        });
        this.canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        // This listener is responsible to stop the dragging action, once the mouse is lifted.
        document.addEventListener('mouseup', () => {
            if (isDragging && abortController) {
                abortController.abort();
                abortController = null;
                isDragging = false;
                dragIndex = -1;
            }
        });
        // Ensure, that when the container size changes we adjust the canvas size and redraw.
        const resizeObserver = new ResizeObserver(() => {
            this.canvas.width = this.parent.clientWidth;
            this.canvas.height = this.parent.clientHeight;
            this.draw();
        });
        resizeObserver.observe(this.parent);
    }
}
