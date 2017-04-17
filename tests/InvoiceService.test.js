import InvoiceService from '../src/InvoiceService';
import InvoiceRepository from "../src/InvoiceRepository";
import sinon from 'sinon';
import { expect } from 'chai';
import Item from "../src/Item";

describe('Invocie Service', () => {

    var mockInvoiceRepository, invoiceService;

    beforeEach(() => {
        mockInvoiceRepository = sinon.mock(InvoiceRepository.prototype);
        invoiceService = new InvoiceService(InvoiceRepository.prototype);
    });

    it('should generate and save invoice successfully.', () => {

        let items = new Set();
        items.add(new Item('iphone 7', 1, 1));
        items.add(new Item('macbook', 1, 1));
        items.add(new Item('mac air', 1, 1));

        let expectedInvoice = '[ (name: iphone 7) (price: 1) (num: 1) ] [ (name: macbook) (price: 1) (num: 1) ] [ (name: mac air) (price: 1) (num: 1) ]  [total: 3] ';

        let result = mockInvoiceRepository.expects('saveInvoice').once().withArgs(expectedInvoice);

        // expect(result.method).to.eql('saveInvoice');

        let invoice = invoiceService.generateAndSaveInvoice(items, 3);
        mockInvoiceRepository.verify();
        mockInvoiceRepository.restore();

        expect(invoice).to.eql(expectedInvoice);
    });
});