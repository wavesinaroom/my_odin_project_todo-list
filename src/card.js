import ChecklistItem from "./check-item";
import List from "./list";

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

  static ID=0;

  static get PRIORITY(){
    return PRIORITY;
  }

  static get STATUS(){
    return STATUS;
  }

  title;
  description;
  dueDate; 
  checklist = [];
  priority = PRIORITY.DEFAULT; 
  notes; 
  listName; 
  completion = STATUS.INPROGRESS;

  constructor(list){
    this.id = 'C'+Card.ID; 
    this.list = list;
    this.render = function (){
      let innerHTML = ["<textarea placeholder='Title'></textarea>",
                      "<textarea placeholder='Description'></textarea>",
                      "<input type='date'>", this.dueDate, "</input>",
                      "<section id='"+this.id+"-CH'>",
                      "<button id='add-CHI'>Add</button>",
                      "</section>",
                      "<select name='priority'>",
                      "<option value='"+PRIORITY.LOW+"'>Low</option>",
                      "<option value='"+PRIORITY.MID+"'>Medium</option>",
                      "<option value='"+PRIORITY.HIGH+"'>High</option>",
                      "</select>",
                      "<select name='status'>",
                      "<option value='"+STATUS.DONE+"'>Done</option>'", 
                      "<option value='"+STATUS.INPROGRESS+"'>In progress</option>'", 
                      "</select>",
                      "<textarea>", this.notes, "</textarea>",
                      "<button id = 'delete-"+this.id+"'>Delete</button>"].join("");
      document.getElementById(this.id).innerHTML = innerHTML;
    }


    let div = document.createElement('div');
    div.id = this.id; 
    div.className = 'card';
    document.getElementById(this.list.id).appendChild(div);
    this.render();

    document.getElementById('add-CHI').addEventListener('click', ()=>{this.addChecklistItem();});
    document.getElementById('delete-'+this.id).addEventListener('click', ()=>{this.deleteSelf();});
    for(let i=0; i<div.children.length; ++i){
      div.children[i].addEventListener('focusout', ()=>{this.saveChanges();});
    } 
  }

  addChecklistItem = function (){
    this.checklist.push(new ChecklistItem(this));
    ++ChecklistItem.ID;
  } 

  deleteSelf(){
    let position = 0;
    while(position<this.list.cards.length&&this.description!=this.list.cards[position].description){
      ++position;
    }
    this.list.cards.splice(position,1);
    document.getElementById(this.id).parentNode.removeChild(document.getElementById(this.id));
  }

  saveChanges = function(){
    this.title = document.querySelector('#'+this.id+' :nth-child(1)').value;
    this.description = document.querySelector('#'+this.id+' :nth-child(2)').value;
    this.dueDate = document.querySelector('#'+this.id+' :nth-child(3)').value;
    this.priority = document.querySelector('#'+this.id+' :nth-child(4)').value;
    this.completion = document.querySelector('#'+this.id+' :nth-child(5)').value;
    this.notes = document.querySelector('#'+this.id+' :nth-child(7)').value;
  }
}
