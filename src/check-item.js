import Component from './component.js';
export default class ChecklistItem extends Component {
  static count;
  static id = 'CL-'+ChecklistItem.count;

  constructor(){
    super();
    this.type = 'check-list';
    this.innerHTML = ["<input type='checkbox'></input>",
               "<textarea placeholder = 'Check Item'></textarea>",
               "<button id'"+ChecklistItem.id+"-remove-button'>Delete</button>"].join(""); 
  }  
}
