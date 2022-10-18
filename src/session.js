import Project from "./project";

export default class Session {
  data = [];
  div = document.createElement('div');
  innerHTML = "<button id='add-P'>Add Project</button>";

  static verifyLogin(username, password){
    if(localStorage.getItem(username+'-session')){
      let userSession = JSON.parse(localStorage.getItem(username+'-session')); 
      if(password==user.password){
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
    session.div.innerHTML = '';
    session = undefined;
  }

  constructor(username, password){
    this.username = username;
    this.password = password;
    this.id = 'Session';

    div.id = this.id; 
    div.className = 'session';
    div.innerHTML = innerHTML;
    document.body.appendChild(div);

    document.getElementById(div.children[0].id).addEventListener('click', ()=>{this.addProject();});
    console.log(this.id);
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



