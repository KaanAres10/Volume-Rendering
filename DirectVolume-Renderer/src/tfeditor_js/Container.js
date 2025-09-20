/** This class handles common functionality of all components in this library. */
export default class Container {
    constructor(container) {
        // Figure out which element we want to embed in.
        if (container) {
            if (typeof container === 'string') {
                this.parent = document.querySelector(container);
            }
            else {
                this.parent = container;
            }
        }
        else {
            throw 'No element given!';
        }
    }
}
