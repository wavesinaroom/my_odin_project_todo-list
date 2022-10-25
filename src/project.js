import Container from "./container";
export default class Project extends Container {
  static count=0;
  static getId(){
    return 'P-'+Project.count;
  }
  constructor(){
    super();
    this.type = 'project';
    this.innerHTML = ["<input type='text' placeholder='Project title'></input>",
                "<button id='"+Project.getId()+"-add-button'>Add</button>",
                "<button id='"+Project.getId()+"-remove-button'>Delete</button>"].join("");
  }
}
