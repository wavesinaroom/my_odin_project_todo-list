import Product from "./product";

const PRIORITY={
  DEFAULT: 'default',
  LOW: 'low',
  MID: 'mid',
  HIGH: 'high'
};

export default class Card extends Product{

  static draggedCard = this;
  static get PRIORITY(){
    return PRIORITY;
  }

  constructor(title,description,dueDate, priority, notes, listName){
    super(title);
    this.description = description;
    this.dueDate = new Date(dueDate); //use thithiss when inputting from html https://stackoverflow.com/questions/28760254/assign-javascript-date-to-html5-datetime-local-input
    this.priority = priority; 
    this.notes = notes; 
    this.checklist = new Map();
    this.listName = listName; 
  }

  static clone(other){
    return new Card(other.title, other.description, other.dueDate, other.priority, other.notes);
  }


}
