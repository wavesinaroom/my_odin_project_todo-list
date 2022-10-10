import Session from "./session";

export default class User{

  static check(username, password){
    if(localStorage.getItem(username)){
      let user = JSON.parse(localStorage.getItem(username)); 
      if(user.password==password){
        alert('Success');
        return true;
      }
    }else{
      alert('Incorrect username/password');
      return false;
    } 
  }

  static deleteAccount(username,password){
    
    if(User.check(username, password)){
      let account = JSON.parse(localStorage.getItem(username)); 
      account = null;
      localStorage.removeItem(username);
    }  
  }

  constructor(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
    this.session = new Session(username);

    if(!localStorage.getItem(this.username)){
      localStorage.setItem(this.username, JSON.stringify(this));
    }   
  } 
}
