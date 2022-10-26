import Session from "./session";
export default class Login{


  constructor(){

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
    let div = document.createElement('div');
    div.id = 'panel';
    document.body.appendChild(div);
    document.getElementById('panel').innerHTML = innerHTML;

    document.getElementById('login').addEventListener('click', ()=>{
      this.checkUser()
    ;});
  
    document.getElementById('sign-up').addEventListener('click', ()=>{
      this.signUp(); 
    });
  }

    checkUser(){
     if(localStorage.getItem(document.getElementById('usr').value)){
        let password = JSON.parse(localStorage.getItem(document.getElementById('usr').value));
        if(document.getElementById('pass').value==password){
          //render session content to html here!
          alert('You can call it a day');
        }else{
          document.getElementById('login-prompt').innerHTML = 'Wrong password'; 
        }
      }else{
        document.getElementById('login-prompt').innerHTML = 'User does not exit, do you want to sign up?';
      }
    } 

    signUp(){
      if(localStorage.getItem(document.getElementById('usr').value)){
        document.getElementById('login-prompt').innerHTML = 'Please Login';
        return;
      }else{
        localStorage.setItem(document.getElementById('usr').value, document.getElementById('pass').value);
      }
    }
}

