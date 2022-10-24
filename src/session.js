import Container from "./container";
import Project from "./project";

export default class Session extends Container{
  type = 'session';
  child = new Project();
  div = document.createElement('div');
  innerHTML = ["<H1>Call it a day!</H1>",
              "<button id='session-add-button'>Add Project</button>"].join("");  
  constructor(){
    super();
    document.getElementById('session-add-button').addEventListener('click', ()=>{this.addChild(9);})
    document.body.innerHTML = this.innerHTML;
  }
}
