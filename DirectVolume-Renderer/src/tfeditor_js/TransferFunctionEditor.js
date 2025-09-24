import { ColorMapEditor } from './ColorMapEditor';
import { TransparencyEditor } from './TransparencyEditor';
import objectAssignDeep from 'object-assign-deep';
/**
 * This component creates a complete transfer function editor, combining the features from the transparency and color
 * map editors.
 *
 * @example
 *   const tf = new TransferFunctionEditor("#tf-editor", {
 *     initialColorMap: {
 *       colorStops: [
 *         {stop: 0, color: "blue"},
 *         {stop: 0.5, color: "white"},
 *         {stop: 1, color: "red"}
 *       ]
 *     }
 *   });
 *
 *
 *   tf.addListener((transferFunctionEditor) => {
 *     console.log(transferFunctionEditor.getTransferFunction());
 *     // output:
 *     // {
 *     //   alphaStops: [
 *     //     { stop: 0, alpha: 0 },
 *     //     { stop: 0.5, alpha: 0.5 },
 *     //     { stop: 1, alpha: 1 }
 *     //   ],
 *     //   colorMap: {
 *     //     colorStops: [
 *     //       { stop: 0, color: "blue" },
 *     //       { stop: 0.5, color": "white" },
 *     //       { stop: 1, color: "red" }
 *     //     ],
 *     //     interpolationMethod: "HSL_LONG"
 *     //   }
 *     // }
 *   }
 */
export class TransferFunctionEditor {
    /**
     * Creates a new transfer function editor inside the given container.
     *
     * @param container Either an HTMLElement or a query string to an element, in which the editor will be embedded.
     * @param options   Can be used to configure the transfer function editor. See {@link TransferFunctionEditorOptions}.
     */
    constructor(container, options) {
        /** This gets called, when the transfer function changes to notify users of this library. */
        this.callbacks = new Map();
        this.callbackCounter = 0;
        if (container) {
            if (typeof container === 'string') {
                this.container = document.querySelector(container);
            }
            else {
                this.container = container;
            }
        }
        else {
            throw 'No element given!';
        }
        // Set all defaults.
        const defaultOptions = {};
        // Merge the options with the defaults.
        // !!! DON'T USE options AND defaultOptions AFTER THIS LINE !!!
        const finalOptions = objectAssignDeep(defaultOptions, options);
        this.container.classList.add('tfe-transfer-function-editor');
        const transparencyEditorElement = document.createElement('div');
        transparencyEditorElement.style.width = '100%';
        transparencyEditorElement.style.minHeight = '50px';
        this.container.append(transparencyEditorElement);
        this.transparencyEditor = new TransparencyEditor(transparencyEditorElement, finalOptions);
        const colorMapEditorElement = document.createElement('div');
        colorMapEditorElement.style.width = '100%';
        colorMapEditorElement.style.minHeight = '10px';
        this.container.append(colorMapEditorElement);
        this.colorMapEditor = new ColorMapEditor(colorMapEditorElement, finalOptions);
        // Connect the color map editor to the transparency editor.
        this.colorMapEditor.addListener((colorMapEditor) => this.transparencyEditor.setColorMap(colorMapEditor.getColorMap()));
        this.transparencyEditor.setColorMap(this.colorMapEditor.getColorMap());
        // When something in the transparency editor changes we notify our listeners. This also includes changes to the
        // color map. The control flow goes like this:
        // ColorMapEditor --notify--> TransparencyEditor --notify--> TransferFunctionEditor --notify--> Listeners
        this.transparencyEditor.addListener(() => {
            this.callbacks.forEach((value) => value(this));
        });
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
    /** Get the alpha stops. */
    getAlphaStops() {
        return this.transparencyEditor.getAlphaStops();
    }
    /** Replace the existing alpha stops with new ones. */
    setAlphaStops(alphaStops) {
        this.transparencyEditor.setAlphaStops(alphaStops);
    }
    /** Get the current color map. */
    getColorMap() {
        return this.colorMapEditor.getColorMap();
    }
    /**
     * This function returns an array of bins with their color, if the color map is discrete. Otherwise, it will return an
     * empty array.
     */
    getDiscreteColorMap() {
        return this.colorMapEditor.getDiscreteColorMap();
    }
    /** Set a new color map. */
    setColorMap(colorMap) {
        this.colorMapEditor.setColorMap(colorMap);
    }
    /** Returns the complete transfer function including the alpha values and the color map. */
    getTransferFunction() {
        return this.transparencyEditor.getTransferFunction();
    }

    setTransferFunction(tf) {
        if (tf?.colorMap) {
            this.colorMapEditor.setColorMap(tf.colorMap);
        }
        if (Array.isArray(tf?.alphaStops)) {
            this.transparencyEditor.setAlphaStops(tf.alphaStops);
        }
        // notify listeners that the TF changed
        this.callbacks.forEach(cb => cb(this));
    }
}
