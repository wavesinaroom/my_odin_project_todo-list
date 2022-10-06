import _ from 'lodash';
import './style.css';
import Card from './card.js';
import List from './list.js';
import Project from './project.js';


let project = new Project('Test','Test\'s going well');
let list = new List('to-do');
let listTwo = new List('In progress');
let card = new Card('My card','testing card','2022-10-7', Card.PRIORITY.DEFAULT, 'Test passed', list.title)
let cardClone = Card.clone(card);

list.addCard(card);
list.addCard(cardClone);
project.addList(list);
project.addList(listTwo);

let cardFetch = localStorage.getItem(card.title);
let output = JSON.parse(cardFetch);
console.log(output.notes);
