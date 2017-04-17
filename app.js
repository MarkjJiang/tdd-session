import Item from "./src/Item";
import CalculateTotalPriceService from "./src/CalculateTotalPriceService";
import InvoiceService from "./src/InvoiceService";
import Discounter from "./src/Discounter";
import InvoiceRepository from "./src/InvoiceRepository";

let items = new Set();
let invoiceRepository = new InvoiceRepository('db.txt');
let calculateTotalPriceService = new CalculateTotalPriceService(new Discounter());
let invoiceService = new InvoiceService(invoiceRepository);

items.add(new Item('iphone 7', 1, 1));
items.add(new Item('macbook', 1, 1));
items.add(new Item('mac air', 1, 1));

let resultPrice = calculateTotalPriceService.calculateTotalPrice(items);

let invoice = invoiceService.generateAndSaveInvoice(items, resultPrice);

console.log(invoice);



