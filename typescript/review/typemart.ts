 import products from "./products.js";

let shipping: number = 0;
let taxPercent: number = 0.05;
let taxTotal: number;
let total: number;

// order details
const productName: string = "fanny pack";
const shippingAddress: string = "123 Pineapple Way, New York, NY 23523";

const product = products.filter(product => product.name === productName)[0];

console.log(`my ${product.name}`);

if (product.preOrder === true) {
  console.log(`Your item, ${product.name} is on back order`)
}

// shipping cost
if (Number(product.price) > 25) {
  console.log(`Free shipping on orders over $25. Your order is $${product.price}`)
} else {
  shipping = 5;
  console.log(`Shipping is $5`);
}

// tax percents
if (/New York/.exec(shippingAddress)) {
  taxPercent = 0.1;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(
  `Product: ${product.name}\nShipping Address: ${shippingAddress}\nProduct Price: $${product.price}\nTax Total: $${taxTotal}\nShipping: $${shipping}\nTotal: $${total}`
);