export default class Mile {
    constructor(value) {
        if (!Number.isInteger(value)) {
            throw TypeError('cannot consturct mile with decimal.');
        }
        this.value = value;
    }
};