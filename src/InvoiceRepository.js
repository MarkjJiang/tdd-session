import * as fs from 'fs';

export default class InvoiceRepository {
    constructor(file) {
        this.file = file;
    }

    saveInvoice(invoice) {
        fs.writeFile(this.file, invoice);
    }
}