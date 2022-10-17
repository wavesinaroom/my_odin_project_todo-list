import Project from "./project";

export default class Session {
  data = [];
  constructor(username){
    this.username = username;
    let div = document.createElement('div');
    this.id = 'Session';

    div.id = this.id; 
    div.className = 'session';
    let innerHTML = "<button id='add-P'>Add</button>";
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



