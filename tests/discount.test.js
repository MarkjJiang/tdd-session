import Discounter from '../src/Discounter';
import { expect } from 'chai';

describe('discount', function () {

    const discounter = new Discounter();

    it('should cut 50 when total is 200', function () {
        let result = discounter.discount(200);
        expect(result).to.eql(150);
    });

    it('should return 90 when total is 90', function () {
        let result = discounter.discount(90);
        expect(result).to.eql(90);
    });

    it('should throw exception when total is negative number', function () {
        expect(() => {discounter.discount(-10)}).to.throw(RangeError);
    });

    it('should cut 80 when total is 300', function () {
        let result = discounter.discount(300);
        expect(result).to.eql(220);
    });

    it('should cut 50 when total is 299', function () {
        let result = discounter.discount(299);
        expect(result).to.eql(249);
    });
});

