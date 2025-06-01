"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_js_1 = require("./products.js");
var shipping = 0;
var taxPercent = 0.05;
var taxTotal;
var total;
// order details
var productName = "fanny pack";
var shippingAddress = "123 Pineapple Way, New York, NY 23523";
var product = products_js_1.default.filter(function (product) { return product.name === productName; })[0];
console.log("my ".concat(product.name));
if (product.preOrder === true) {
    console.log("Your item, ".concat(product.name, " is on back order"));
}
// shipping cost
if (Number(product.price) > 25) {
    console.log("Free shipping on orders over $25. Your order is $".concat(product.price));
}
else {
    shipping = 5;
    console.log("Shipping is $5");
}
// tax percents
if (/New York/.exec(shippingAddress)) {
    taxPercent = 0.1;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(product.name + " " + shippingAddress + " " + "product price" + " " + product.price + " " + taxTotal + " " + shipping + " " + total);
console.log("Product: ".concat(product.name, "\nShipping Address: ").concat(shippingAddress, "\nProduct Price: $").concat(product.price, "\nTax Total: $").concat(taxTotal, "\nShipping: $").concat(shipping, "\nTotal: $").concat(total));
