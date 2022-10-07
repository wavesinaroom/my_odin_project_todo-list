export default class User{
  constructor(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;

    if(!localStorage.getItem(this.username))
      localStorage.setItem(this.username, JSON.stringify(this));
  }

}
