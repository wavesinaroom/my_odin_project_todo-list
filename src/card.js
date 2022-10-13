import checklistItem from "./check-item";

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
    this.dueDate = null; 
    this.checklist = [];
    this.checklistItemCount = 0;
    this.priority = priority; 
    this.notes = notes; 
    this.listName = listName; 
    this.completion = STATUS.INPROGRESS;

    this.render = function (){
      let innerHTML = ["<textarea>", this.title, "</textarea>",
                      "<textarea>", this.description, "</textarea>",
                      "<input type='date'>", this.dueDate, "</input>",
                      "<section id='"+this.tag+"-checklist'>",
                      "<button id='add-checklist'>Add</button>",
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
                      "<button id='save-button'>Save</button>"].join("");
      document.getElementById(this.tag).innerHTML = innerHTML;
    }


    let div = document.createElement('div');
    div.id = this.tag; 
    div.className = 'card';
    document.body.appendChild(div);
    this.render();

    document.getElementById('save-button').addEventListener('click', ()=>{this.saveChanges();});
    document.getElementById('add-checklist').addEventListener('click', ()=>{this.addChecklistItem();});
   
  }

  addChecklistItem = function (){
    this.checklist.push(new checklistItem(this));
    ++this.checklistItemCount;
  } 

  logChecklist(){
    console.log(this.checklist.length);

  }
  saveChanges = function(){
    //Find out a way to use the onfocusout event to save changes in fields. 
    this.title = document.querySelector('#'+this.tag+' :nth-child(1)').value;
    this.description = document.querySelector('#'+this.tag+' :nth-child(2)').value;
    this.dueDate = document.querySelector('#'+this.tag+' :nth-child(3)').value;
    this.priority = document.querySelector('#'+this.tag+' :nth-child(4)').value;
    this.completion = document.querySelector('#'+this.tag+' :nth-child(5)').value;
    this.notes = document.querySelector('#'+this.tag+' :nth-child(7)').value;
  }
}
