import _ from 'lodash';
import Card from './card';
import List from './list'; 

let list = new List ("My list");
let card = new Card("My card", "This is my card", "2022-10-14", Card.PRIORITY.DEFAULT, "Testing my card", list.title);

