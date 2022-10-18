import Project from "./project";

export default class Session {
  data = [];
  div = document.createElement('div');
  innerHTML = "<button id='add-P'>Add Project</button>";

  static verifyLogin(username, password){
    if(localStorage.getItem(username+'-session')){
      let userSession = JSON.parse(localStorage.getItem(username+'-session')); 
      if(password==userSession.password){
        alert('You can call it a day');
        div.innerHTML = innerHTML + userSession;           
      }else{
        alert('Wrong password');
      }
    }else{
      alert('User does not exit, do you want to sign up?');
    }
  }

  static signUp(username, password){
    let newUser = new Session(username,password);
    newUser.saveSession();
  }

  static logOut(session){
    session.saveSession();
    document.getElementById(session.id).parentNode.removeChild(document.getElementById(session.id));
    session = undefined;
    alert('Logged out');
  }

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
    this.div.appendChild(this.logOutButton);

    document.getElementById(this.div.children[0].id).addEventListener('click', ()=>{this.addProject();});
    document.getElementById(this.logOutButton.id).addEventListener('click', ()=>{Session.logOut(this);});
  }

  saveSession(){
    if(!localStorage.getItem(this.username+'-session')){
      localStorage.setItem(this.username+'-session', JSON.stringify(this));
    }else{
      window.addEventListener('storage', (e) => {
      document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
      });
    } 
  }

  addProject(){
    this.data.push(new Project(this));
    ++Project.ID;
  }

}



