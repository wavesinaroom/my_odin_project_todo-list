import _ from 'lodash';
import './style.css';
import Card from './card.js';

let card = new Card('My card','My card description','2020-05-12',Card.PRIORITY.HIGH, 'I\'m a very long card note', 'My first check', true);
console.log(card.title);
console.log(card.description);
console.log(card.dueDate);
console.log(card.priority);
console.log(card.notes);
