export default class CalculateTotalPriceService {

    constructor(discounter) {
        this.discounter = discounter;
    }

    calculateTotalPrice(items) {
        let total = 0;
        items.forEach(function (item) {
            total += item.price * item.num;
        });
        return this.discounter.discount(total);
    }
}
