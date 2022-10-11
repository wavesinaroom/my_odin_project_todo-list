const PRIORITY={
  DEFAULT: 'default',
  LOW: 'low',
  MID: 'mid',
  HIGH: 'high'
};

const STATUS={
  DONE: 'done',
  INPROGRESS: 'InProgress'
};

export default class Card {

  static get PRIORITY(){
    return PRIORITY;
  }

  static get STATUS(){
    return STATUS;
  }

  static clone(other){
    return new Card(other.title, other.description, other.dueDate, other.priority, other.notes);
  }

  constructor(title,description,dueDate, priority, notes, listName){
    this.title = title;
    this.tag = this.title.split(" ").join("");
    this.description = description;
    this.dueDate = null; //use this when inputting from html https://stackoverflow.com/questions/28760254/assign-javascript-date-to-html5-datetime-local-input
    this.priority = priority; 
    this.notes = notes; 
    this.checklist = new Map();
    this.listName = listName; 
    this.completion = STATUS.INPROGRESS;

    this.render = function (){
      let innerHTML = ["<textarea>", this.title, "</textarea>",
                      "<textarea>", this.description, "</textarea>",
                      "<input type='date'>", this.dueDate, "</input>",
                      "<p>", this.priority, "</p>",
                      "<textarea>", this.notes, "</textarea>",
                      "<p>", this.completion, "</p>",
                      "<button id='save'>Save</button>"].join("");
      document.getElementById(this.tag).innerHTML = innerHTML;
    }

    this.saveChanges = function(){
      this.title = document.querySelector('#'+this.tag+' :nth-child(1)').value;
      this.description = document.querySelector('#'+this.tag+' :nth-child(2)').value;
      this.dueDate = document.querySelector('#'+this.tag+' :nth-child(3)').value;
      console.log(this.dueDate);
    }

    let div = document.createElement('div');
    div.id = this.tag; 
    div.className = 'card';
    document.body.appendChild(div);
    this.render();
    document.getElementById('save').addEventListener('click', ()=>{this.saveChanges();});

  }
}
