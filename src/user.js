import Session from "./session";

export default class User{
  constructor(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
    this.session = new Session(username);
  }
  login(username, password){
    
  }
}
