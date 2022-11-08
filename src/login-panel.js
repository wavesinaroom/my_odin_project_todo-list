import Card from "./card";
import ChecklistItem from "./check-item";
import List from "./list";
import Project from "./project";
import Session from "./session";
export default class Login{

  username;
  session;
  constructor(){
    this.div = document.createElement('div');
  }

  render(){
    let innerHTML = ["<h2 id ='title'>Call it a day</h2>",
                    "<p id = 'login-prompt'></p>",
                    "<div class ='username'>",
                    "<label for='user'>Username</label>",
                    "<input type='text' name='user' id = 'usr'>",
                    "</div>",
                    "<div class ='password'>",
                    "<label for='password'>Password</label>",
                    "<input type='password' name='password' id = 'pass'>",
                    "</div>",
                    "<div input='buttons'>",
                    "<button id='login'>Login</button>",
                    "<button id='sign-up'>Sign up</button>",
                    "</div>"].join('');
  this.div = document.createElement('div');
  this.div.id = 'panel';
  document.body.appendChild(this.div);
  document.getElementById('panel').innerHTML = innerHTML;
  document.getElementById('login-prompt').style.display = 'none';
  document.body.style.background = "#d1df90";

  document.getElementById('login').addEventListener('click', ()=>{
    this.username = document.getElementById('usr').value;
    if(!this.username.trim()||!document.getElementById('pass').value.trim()){
      document.getElementById('login-prompt').style.display = 'inline';
      document.getElementById('login-prompt').innerHTML = 'Please enter username/password'; 
      return;
    }
    this.checkUser(this.username);
  ;});

  document.getElementById('sign-up').addEventListener('click', ()=>{
    this.username = document.getElementById('usr').value;
    if(!this.username.trim()||!document.getElementById('pass').value.trim()){
      document.getElementById('login-prompt').style.display = 'inline';
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
        document.getElementById('login-prompt').style.display = 'inline';
        document.getElementById('login-prompt').innerHTML = 'Wrong password'; 
      }
    }else{
      document.getElementById('login-prompt').style.display = 'inline';
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

    ChecklistItem.count = document.getElementById(this.session.username+'-session').dataset.checklist;
    Card.count = document.getElementById(this.session.username+'-session').dataset.card;
    List.count = document.getElementById(this.session.username+'-session').dataset.list;
    Project.count = document.getElementById(this.session.username+'-session').dataset.project;
    
    this.updateButtonEvents();
  }      
  
  updateButtonEvents(){

    const project = new Project(); 
    const list = new List();
    const card = new Card();

    const addButtons = document.querySelectorAll('[id*="-add-button"]'); 
    let buttonParent;

    for(let p = 1; p<addButtons.length; ++p){
      buttonParent = addButtons[p].parentNode; 
      if(buttonParent.parentNode.className=='project'){
        addButtons[p].addEventListener('click', ()=>{
         project.addChild(addButtons[p].id.substring(0,addButtons[p].id.search('-add-button'))); 
        });
      }
    }

    //Switch statement would reduce number of lines but it creates event propagation for an odd reason
    for(let l = 1; l<addButtons.length; ++l){
      buttonParent = addButtons[l].parentNode;
      if(buttonParent.parentNode.className=='list'){
        addButtons[l].addEventListener('click', ()=>{
         list.addChild(addButtons[l].id.substring(0,addButtons[l].id.search('-add-button'))); 
        });
      }
    }

    for(let c = 1; c<addButtons.length; ++c){
      buttonParent = addButtons[c].parentNode;
      if(buttonParent.parentNode.className=='card'){
        addButtons[c].addEventListener('click', ()=>{
        card.addChild(addButtons[c].id.substring(0,addButtons[c].id.search('-add-button'))); 
        });
      }
    }

    document.getElementById('session-add-button').addEventListener('click', (e)=>{
      e.stopPropagation();
      this.session.addChild(this.username+"-session");
    });

    const removeButtons = document.querySelectorAll('[id*="-remove-button"]');

    for(let r = 0; r<removeButtons.length; ++r){
      removeButtons[r].addEventListener('click', ()=>{
        document.getElementById(removeButtons[r].id.substring(0,removeButtons[r].id.search('-remove-button'))).parentNode.removeChild(document.getElementById(removeButtons[r].id.substring(0,removeButtons[r].id.search('-remove-button'))));
      }); 
    }
  }
}

