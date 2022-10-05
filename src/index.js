import _ from 'lodash';
import './style.css';
import Card from './card.js';
import List from './list.js';

let todoList = new List('To-do');
let progressList = new List('Progress'); 
let card = new Card('My card','My card description','2020-05-12',Card.PRIORITY.HIGH, 'I\'m a very long card note', todoList.title);
Card.draggedCard = card;
console.log(card.description);
todoList.addCard();
console.log(todoList.cards[0].description);
todoList.removeCard();
progressList.addCard();
console.log((progressList.cards[0].description));
console.log(todoList.cards[0].description);


