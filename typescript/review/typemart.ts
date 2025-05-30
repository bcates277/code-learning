import products from "./products.js";

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;


const product = products.filter(product => product.name === productName)[0];

console.log(`my ${product.name}`);


if (product.preOrder === true) {
  console.log(`Your item, ${product.name} is on back order`)
}

const shippingAddress: string = '123 Smith Lake Raod, Birmingham, AL'