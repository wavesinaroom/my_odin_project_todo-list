import Component from './component.js';
export default class ChecklistItem extends Component {
  static count=0;
  static getId() { 
    return 'CL-'+ChecklistItem.count;
  }

  constructor(){
    super();
    this.type = 'check-list';
    this.innerHTML = ["<input type='checkbox'></input>",
               "<input type='text' placeholder = 'Check Item'></input>"].join(""); 
  }  
}
