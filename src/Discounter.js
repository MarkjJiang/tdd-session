const RULES = new Map();
RULES.set(400, 100);
RULES.set(300, 80);
RULES.set(200, 50);

export default class Discounter {

    constructor() {
        this.rules = RULES;
    }

    discount(total) {

        if (total < 0) {
            throw new RangeError();
        }

        // if (total >= 300) {
        //     return total - 80;
        // }
        //
        // if (total >= 200) {
        //     return total - 50;
        // }

        for (let [key, value] of this.rules) {
            if (total >= key) {
                return total - value;
            }
        }

        return total;
    }
}