export default class Item {
    constructor(name, price, num) {
        this._name = name;
        this._price = price;
        this._num = num;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get num() {
        return this._num;
    }

    set num(value) {
        this._num = value;
    }
}
