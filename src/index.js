import _ from 'lodash';
import './style.css';
import Card from './card.js';
import List from './list.js';

let list = new List('To-do');
let card = new Card('My card','My card description','2020-05-12',Card.PRIORITY.HIGH, 'I\'m a very long card note', list.title);
console.log(card.title);
card.title = 'My second card';
console.log(card.title);
let copycat = Card.clone(card);
console.log(copycat.priority);
