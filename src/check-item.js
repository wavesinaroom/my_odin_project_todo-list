export default class ChecklistItem extends Component {
  static count;
  static id = 'CL-'+count;
  innerHTML = ["<input type='checkbox'></input>",
                       "<textarea placeholder = 'Check Item'></textarea>",
                       "<button id = 'delete-"+this.id+"'>Delete</button>"].join("");  
}
