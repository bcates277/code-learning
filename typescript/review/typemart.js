"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_js_1 = require("./products.js");
var productName = "fanny pack";
var product = products_js_1.default.filter(function (product) { return product.name === productName; })[0];
console.log("my ".concat(product.name));
