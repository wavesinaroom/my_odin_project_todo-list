import Container from "./container";
export default class Project extends Container {
  static count;
  static id = 'P-'+Project.count;
  constructor(){
    super();
    this.type = 'project';
    this.innerHTML = ["<textarea placeholder='Project title'></textarea>",
                "<button id='"+Project.id+"-add-button'>Add</button>",
                "<button id'"+Project.id+"-remove-button'>Delete</button>"].join("");
  }
}
