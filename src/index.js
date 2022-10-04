import _ from 'lodash';
import './style.css';
import Card from './card.js';

let card = new Card('My card','My card description','2020-05-12');
console.log(card.title);
console.log(card.description);
console.log(card.dueDate);
let time = new Date();
console.time();
console.log(time);
