import Mile from '../src/mile';
import { expect } from 'chai';

describe('test mile', () => {
    it('should equals when compare 1 mile and 1 mile.', () => {
        let mile1 = new Mile(1);
        let mile2 = new Mile(1);

        expect(mile1).to.eql(mile2);
    });

    it('should not equals when compare 1 mile and 2 mile.', () => {
        let mile1 = new Mile(1);
        let mile2 = new Mile(2);

        expect(mile1).to.not.eql(mile2)
    });

    it('should not construct mile with decimal.', () => {
        expect(() => {
            new Mile(1.1);
        }).to.throw(TypeError, 'cannot consturct mile with decimal.');
    });
});
