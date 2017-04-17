import InvoiceRepository from "./InvoiceRepository";
export default class InvoiceService {

    constructor(invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    generateAndSaveInvoice(items, total) {
        let invoice = '';

        for(let item of items) {
            invoice += `[ (name: ${item.name}) (price: ${item.price}) (num: ${item.num}) ] `
        }

        invoice += ` [total: ${total}] `;
        let invoiceRepository = new InvoiceDBRepository();
        invoiceRepository.saveInvoice(invoice.toString());

        return invoice;
    }
}

