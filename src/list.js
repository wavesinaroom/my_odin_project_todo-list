import Container from "./container.js";
export default class List extends Container{
  static count;
  static id = 'L-'+List.count;
  constructor(){
    super();
    this.type = 'list';
    this.innerHTML = ["<textarea placeholder='List Title'></textarea>",
                "<button id='"+List.id+"-add-button'>Add</button>",
                "<button id'"+List.id+"-remove-button'>Delete</button>"].join("");
  }
}
