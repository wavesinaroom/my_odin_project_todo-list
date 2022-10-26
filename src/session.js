import ChecklistItem from "./check-item.js";
import Card from "./card.js";
import List from "./list.js";
import Project from "./project.js";
import Container from "./container.js";

export default class Session extends Container{
  constructor(username){
    super();
    this.username = username;
    this.globalValues = [ChecklistItem.count, Card.count, List.count, Project.count];
    this.child = new Project();
    this.type = 'session';
    this.innerHTML = ["<H1>Call it a day!</H1>",
                "<button id='session-add-button'>Add Project</button>",
                "<button id='logout'>Log out</button>"].join("");  
    this.div.innerHTML = this.innerHTML;
    this.div.id = this.username+'-session';
    document.body.appendChild(this.div);

    document.getElementById('session-add-button').addEventListener('click', ()=>{this.addChild(Project.getId());
    ++Project.count;});
    document.getElementById('logout').addEventListener('click', ()=>{
      localStorage.setItem(username+'-session', JSON.stringify(this.div.innerHTML));
    });
  }
}
