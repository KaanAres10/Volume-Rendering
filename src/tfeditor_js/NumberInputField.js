import Container from './Container';
/**
 * This container is a wrapper around an HTMLInputElement of type number. It adds the ability to change the number with
 * the scroll wheel and adds robust validation, so that the field always contains a number.
 */
export default class NumberInputField extends Container {
    /**
     * Creates a new number input field inside the given container.
     *
     * @param container Either an HTMLElement or a query string to an element, in which the number input will be embedded.
     * @param options   Can be used to configure the number input field. See {@link NumberInputFieldOptions}.
     */
    constructor(container, options) {
        super(container);
        /** This gets called, when the value changes to notify users of this library. */
        this.callbacks = new Map();
        this.callbackCounter = 0;
        // Set all defaults.
        const defaultOptions = {
            label: undefined,
            initialValue: 0,
            min: undefined,
            max: undefined,
            step: 1,
            integerOnly: true,
        };
        // Merge the options with the defaults.
        // !!! DON'T USE options AND defaultOptions AFTER THIS LINE !!!
        const finalOptions = Object.assign(defaultOptions, options);
        this.parent.classList.add('tfe-number-input-field-root');
        this.input = document.createElement('input');
        this.input.classList.add('tfe-number-input-field-input');
        this.input.type = 'number';
        if (finalOptions.min !== undefined) {
            this.input.min = finalOptions.min.toString();
            this.min = finalOptions.min;
        }
        if (finalOptions.max !== undefined) {
            this.input.max = finalOptions.max.toString();
            this.max = finalOptions.max;
        }
        this.input.step = finalOptions.step.toString();
        this.step = finalOptions.step;
        this.integerOnly = finalOptions.integerOnly;
        this.setValue(finalOptions.initialValue);
        // If a label string is given, we wrap the input element in a label element.
        if (finalOptions.label) {
            this.label = document.createElement('label');
            this.label.classList.add('tfe-number-input-field-label');
            this.label.innerText = finalOptions.label;
            this.label.appendChild(this.input);
            this.parent.appendChild(this.label);
        }
        else {
            this.parent.appendChild(this.input);
        }
        this.setUpEventListeners();
    }
    /**
     * Register a callback that gets called, when the value changes. The callback gets called once immediately.
     *
     * @param callback The function that gets called whenever the value changes.
     */
    addListener(callback) {
        const id = this.callbackCounter++;
        this.callbacks.set(id, callback);
        callback(this.value);
        return id;
    }
    /** Removes the listener with the given id. */
    removeListener(id) {
        this.callbacks.delete(id);
    }
    /** Returns the number value. */
    getValue() {
        return this.value;
    }
    /**
     * Sets a new value. The value might be modified to fulfill the min, max and integerOnly constraints. By default, the
     * observers will be notified as well. This can be suppressed with the second argument set to false.
     */
    setValue(value, notifyObservers = true) {
        if (value === this.value) {
            return;
        }
        let tmp = value;
        if (this.min !== undefined && value < this.min) {
            tmp = this.min;
        }
        else if (this.max !== undefined && value > this.max) {
            tmp = this.max;
        }
        this.value = this.integerOnly ? Math.round(tmp) : tmp;
        this.input.valueAsNumber = this.value;
        if (notifyObservers) {
            this.callbacks.forEach((callback) => {
                callback(this.value);
            });
        }
    }
    /**
     * This function clamp the number inside the input field to a given range and returns the number or null if it is not
     * valid.
     */
    validateInput() {
        if (this.min !== undefined && this.input.valueAsNumber < this.min) {
            this.input.valueAsNumber = this.min;
        }
        else if (this.max !== undefined && this.input.valueAsNumber > this.max) {
            this.input.valueAsNumber = this.max;
        }
        return Number.isFinite(this.input.valueAsNumber) ? this.input.valueAsNumber : null;
    }
    /** This function validates the content of the input, once it gets submitted or the focus is lost. */
    validateFinalInput() {
        const value = this.validateInput();
        if (value === null) {
            this.input.valueAsNumber = this.min;
            return this.min;
        }
        return null;
    }
    /**
     * Adds listeners for handling mouse wheel events and validation.
     */
    setUpEventListeners() {
        // Adds support for changing the number with the mouse wheel.
        this.input.addEventListener('wheel', (ev) => {
            ev.preventDefault();
            if (ev.deltaY > 0) {
                // Decrement
                this.setValue(this.value - this.step);
            }
            else if (ev.deltaY < 0) {
                // Increment
                this.setValue(this.value + this.step);
            }
        });
        // This listener makes sure, that the number is always clamped to the min/max constraints. It allows an empty input.
        // An empty input will be handled by the next two listeners.
        this.input.addEventListener('input', () => {
            const value = this.validateInput();
            if (value !== null) {
                this.setValue(value);
            }
        });
        // If focus is lost, the input gets validated to fulfill all requirements.
        this.input.addEventListener('focusout', () => {
            const value = this.validateFinalInput();
            if (value !== null) {
                this.setValue(value);
            }
        });
        // If enter is pressed, the input gets validated to fulfill all requirements.
        this.input.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') {
                const value = this.validateFinalInput();
                if (value !== null) {
                    this.setValue(value);
                }
            }
        });
    }
}
