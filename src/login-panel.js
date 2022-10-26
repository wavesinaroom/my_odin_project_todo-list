import Session from "./session";
export default class Login{

  username;
  constructor(){
    this.div = document.createElement('div');
  }

  render(){
    let innerHTML = ["<h2>Call it a day</h2>",
                    "<h4>Login</h4>",
                    "<p id = 'login-prompt'></p>",
                    "<div class ='username'>",
                    "<label for='user'>Username</label>",
                    "<input type='text' name='user' id = 'usr'>",
                    "</div>",
                    "<div class ='password'>",
                    "<label for='password'>Password</label>",
                    "<input type='password' name='password' id = 'pass'>",
                    "</div>",
                    "<button id='login'>Login</button>",
                    "<button id='sign-up'>Sign up</button>"].join('');
    this.div = document.createElement('div');
    this.div.id = 'panel';
    document.body.appendChild(this.div);
    document.getElementById('panel').innerHTML = innerHTML;

    document.getElementById('login').addEventListener('click', ()=>{
      this.username = document.getElementById('usr').value;
      if(!this.username.trim()||!document.getElementById('pass').value.trim()){
        document.getElementById('login-prompt').innerHTML = 'Please enter username/password'; 
        return;
      }
      this.checkUser(this.username);
    ;});
  
    document.getElementById('sign-up').addEventListener('click', ()=>{
      this.username = document.getElementById('usr').value;
      if(!this.username.trim()||!document.getElementById('pass').value.trim()){
        document.getElementById('login-prompt').innerHTML = 'Please enter username/password'; 
        return;
      }
      this.signUp(this.username); 
    });
  }

    checkUser(username){
     if(localStorage.getItem(document.getElementById('usr').value)){
        let password = JSON.parse(localStorage.getItem(document.getElementById('usr').value));
        if(document.getElementById('pass').value==password){
          let session = new Session(username);
          document.body.removeChild(this.div);
          session.innerHTML = JSON.parse(localStorage.getItem(username+'-session'));
          document.getElementById(username+'-session').innerHTML = session.innerHTML;
        }else{
          document.getElementById('login-prompt').innerHTML = 'Wrong password'; 
        }
      }else{
        document.getElementById('login-prompt').innerHTML = 'User does not exit, do you want to sign up?';
      }
    } 

    signUp(username){
      if(localStorage.getItem(document.getElementById('usr').value)){
        document.getElementById('login-prompt').innerHTML = 'Please Login';
        return;
      }else{
        localStorage.setItem(username, document.getElementById('pass').value);
        document.body.removeChild(this.div);
        let session = new Session(username);
      }
    }
}

