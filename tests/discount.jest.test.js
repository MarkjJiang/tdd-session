// import Discounter from '../src/Discounter';
jest.mock('../src/Discounter', jest.genMockFromModule('../src/Discounter'));

describe('discount', function () {

    const Discounter = require('../src/Discounter');

    test('should return 80 when total is 100', function () {

        let mock = new Discounter();


        let result = discounter.discount(100);
        expect(result).to.eql(80);
    });

    test('should return 90 when total is 90', function () {
        let result = discounter.discount(90);
        expect(result).to.eql(90);
    });

    test('should throw exception when total is negative number', function () {
        expect(() => {discounter.discount(-10)}).to.throw(RangeError);
    });

    test('should return 140 when total is 200', function () {
        let result = discounter.discount(200);
        expect(result).to.eql(140);
    });
});

