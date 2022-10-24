import LoginPanel from "./login-panel";
import Project from "./project";

export default class Session {
  data = [];
  div = document.createElement('div');
  innerHTML = ["<button id='add-P'>Add Project</button>",
              "<button id='log-out'>Log Out</button>"].join('');

  constructor(username, password){
    this.username = username;
    this.password = password;
    this.id = username+'-session';

    this.div.id = this.id; 
    this.div.className = 'session';
    this.div.innerHTML = this.innerHTML;
    document.body.appendChild(this.div);
    
    document.getElementById(this.div.children[0].id).addEventListener('click', ()=>{this.addProject();});
    document.getElementById('log-out').addEventListener('click', ()=>{
      LoginPanel.logOut(this.username, this.password, this.id, this.data, this.innerHTML)
    });

  }

  addProject(){
    this.data.push(new Project(this));
    ++Project.ID;
  }

}




