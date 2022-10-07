export default class Session {
  data = [];
  constructor(username){
    this.username = username;
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
  addProject(project){
    this.data.push(project);
  }
  removeProject(position){
    const deleteCount = 1;
    this.data.splice(position, deleteCount);
  }
}



