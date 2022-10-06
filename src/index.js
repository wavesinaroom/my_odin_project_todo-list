import _ from 'lodash';
import './style.css';
import Card from './card.js';
import List from './list.js';
import Project from './project.js';


let project = new Project('Test');
let list = new List('to-do');
let card = new Card("My card","testing card","2022-10-7", Card.PRIORITY.DEFAULT, "Test passed", list.title)

let cardClone = Card.clone(card);
console.dir(card);
console.dir(cardClone);
card = null;
console.dir(card);


