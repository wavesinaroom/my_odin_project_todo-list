import Session from "./session";
export default class LoginPanel{

  instance;
  static getInstance(){
    if(LoginPanel.instance = null)
      LoginPanel.instance = new LoginPanel();
    return LoginPanel.instance;
  }

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
    this.checkUser();});
  
    document.getElementById('sign-up').addEventListener('click', ()=>{
      this.signUp(); 
    });
  }
    checkUser(){
      
     if(localStorage.getItem(document.getElementById('usr').value+'-session')){
        let session = JSON.parse(localStorage.getItem(document.getElementById('usr').value+'-session')); 
        if(document.getElementById('pass').value==session.password){
          //render session content to html here!
          alert('You can call it a day');
        }else{
          alert('Wrong password');
        }
      }else{
        alert('User does not exit, do you want to sign up?');
      }
    } 

    signUp(){
      if(localStorage.getItem(document.getElementById('usr').value+'-session')){
        alert('Please login');
        return;
      }else{
        let session = new Session(document.getElementById('usr').value,document.getElementById('pass').value);
        localStorage.setItem(session.id+'-data', JSON.stringify(session.data));
        localStorage.setItem(session.id+'-HTML', JSON.stringify(session.innerHTML));
      }
    }
}

