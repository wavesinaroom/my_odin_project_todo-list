import Container from "./container.js";
import Project from "./project.js";
export default class Session extends Container{
  constructor(){
    super();
    this.child = new Project();
    this.child.id = Project.id;
    this.type = 'session';
    this.innerHTML = ["<H1>Call it a day!</H1>",
                "<button id='session-add-button'>Add Project</button>"].join("");  
    this.div.innerHTML = this.innerHTML;
    document.body.appendChild(this.div);
    document.getElementById('session-add-button').addEventListener('click', ()=>{this.addChild(this);});
  }
}
