import Project from "./project";

export default class Session {
  data = [];
  div = document.createElement('div');
  innerHTML = "<button id='add-P'>Add Project</button>";

  constructor(username, password){
    this.username = username;
    this.password = password;
    this.id = username+'-session';

    this.div.id = this.id; 
    this.div.className = 'session';
    this.div.innerHTML = this.innerHTML;
    document.body.appendChild(this.div);
    
    this.logOutButton = document.createElement('button');
    this.logOutButton.id = 'logB';
    this.logOutButton.innerHTML = 'Log out';
    this.div.appendChild(this.logOutButton);

    document.getElementById(this.div.children[0].id).addEventListener('click', ()=>{this.addProject();});
    document.getElementById(this.logOutButton.id).addEventListener('click', ()=>{this.logOut();});
  }

  logOut(){
    localStorage.setItem(Session.currentSession.username+'-session',JSON.stringify(this)); 
    document.getElementById(this.id).parentNode.removeChild(document.getElementById(this.id));
    alert('Logged out');
  }

  addProject(){
    this.data.push(new Project(this));
    ++Project.ID;
  }

}



