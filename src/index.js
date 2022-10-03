import _ from 'lodash';
import './style.css';
import Product from './product.js';

let product = new Product('message');
console.log(product.title);
product.editTitle('message 2');
console.log(product.title);
product.destroyProduct(product);
console.log(product.title);
