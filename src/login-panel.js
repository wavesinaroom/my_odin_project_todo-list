import Card from "./card";
import ChecklistItem from "./check-item";
import List from "./list";
import Project from "./project";
import Session from "./session";
export default class Login{

  username;
  session;
  project = new Project();
  list = new List();
  card = new Card();
  checklist = new ChecklistItem();
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
        this.logIn(username);
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
      this.session = new Session(username);
      document.getElementById('logout').addEventListener('click', ()=>{
        this.logOut(); 
        this.render();
      });
    }
  }

  logOut(){
    document.getElementById(this.session.username+'-session').dataset.checklist= ChecklistItem.count;
    document.getElementById(this.session.username+'-session').dataset.card = Card.count;
    document.getElementById(this.session.username+'-session').dataset.list = List.count;
    document.getElementById(this.session.username+'-session').dataset.project = Project.count;
    localStorage.setItem(this.session.username+'-session', JSON.stringify(document.body.innerHTML));

    document.body.innerHTML='';
  }

  logIn(username){
    document.body.innerHTML = '';
    this.session = new Session(username);
    document.body.innerHTML = JSON.parse(localStorage.getItem(username+'-session'));
    
    document.getElementById('logout').addEventListener('click', ()=>{
      this.logOut(); 
      this.render();
    });

    let inputs = document.getElementsByClassName('input');
    for(let i=0; i<inputs.length; ++i){ 
      if(inputs[i].id == 'checkbox'&&inputs[i].dataset.storage=='on'){
        inputs[i].checked = true;
      }
      inputs[i].value = inputs[i].dataset.storage; 
    }

    this.updateButtonEvents();
    ChecklistItem.count = document.getElementById(this.session.username+'-session').dataset.checklist;
    Card.count = document.getElementById(this.session.username+'-session').dataset.card;
    List.count = document.getElementById(this.session.username+'-session').dataset.list;
    Project.count = document.getElementById(this.session.username+'-session').dataset.project;
  }      
  
  updateButtonEvents(){
    let addButtons = document.querySelectorAll('[id*="-add-button"]');
    addButtons.forEach(button =>{
      button.addEventListener('click', (e)=>{
        e.stopPropagation();
        switch (button.parentNode.className){
          case 'session':
            this.session.addChild(this.session.username+'-session');
          case 'project':
           this.project.addChild(button.parentNode.id); 
          case 'list':
            this.list.addChild(button.parentNode.id);
          case 'card':
            this.card.addChild(button.parentNode.id);
          default:
            return;
        }
      });
    });
    
    let removeButtons = document.querySelectorAll('[id*="-remove-button"]');
    removeButtons.forEach(button =>{
      alert('Here')
      button.addEventListener('click', (e)=>{
        e.stopPropagation();
        switch (button.parentNode.className){
          case 'project':
           this.project.removeSelf(button.id); 
          case 'list':
            this.list.removeSelf(button.id);
          case 'card':
            this.card.removeSelf(button.id);
          case 'check-list':
            this.checklist.removeSelf(button.id);
          default:
            return;
        }
      });
    });
  }
}

