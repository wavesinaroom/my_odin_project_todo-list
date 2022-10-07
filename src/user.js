import Session from "./session";

export default class User{
  constructor(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
    this.session = new Session(username);

    if(!localStorage.getItem(this.username)){
      localStorage.setItem(this.username, JSON.stringify(this));
    }   
  } 
  login(username, password){
    let login;
    if(localStorage.getItem(username)){
      login = JSON.parse(localStorage.getItem(username)); 
      if(login.password==password){
        alert('Success');
      }
    }else{
      alert('Incorrect username/password');
    } 
  }
}
