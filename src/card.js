const PRIORITY={
  DEFAULT: 'default',
  LOW: 'low',
  MID: 'mid',
  HIGH: 'high'
};

export default class Card {

  static get PRIORITY(){
    return PRIORITY;
  }

  constructor(title,description,dueDate, priority, notes, listName){
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate); //use this when inputting from html https://stackoverflow.com/questions/28760254/assign-javascript-date-to-html5-datetime-local-input
    this.priority = priority; 
    this.notes = notes; 
    this.checklist = new Map();
    this.listName = listName; 

    if(!localStorage.getItem(title))
      localStorage.setItem(this.title, JSON.stringify(this));
  }

  static clone(other){
    return new Card(other.title, other.description, other.dueDate, other.priority, other.notes);
  }


}
