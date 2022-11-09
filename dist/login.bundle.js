"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["login"],{

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.js */ "./src/container.js");
/* harmony import */ var _check_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-item.js */ "./src/check-item.js");



class Card extends _container_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  static count=0;
  static getId(){
    return 'C-'+Card.count;
  }

  constructor(){
    super();
    this.child = new _check_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.className = 'card';
    this.innerHTML = ["<div class='header'>",
                "<input class='input' data-storage='' type='text' placeholder='Card title'></input>",
                "</div>",
                "<div class = 'content'>",
                "<textarea class='input' data-storage='' placeholder='Description'></textarea>",
                "<input class='input' data-storage='' type='date' placeholder='2022-10-10'></input>",
                "<select class='input' data-storage=''>",
                "<option value='' disabled selected hidden>Choose priority</option>",
                "<option>Low</option>",
                "<option>Medium</option>",
                "<option>High</option>",
                "</select>",
                "<select class='input' data-storage=''>",
                "<option value='' disabled selected hidden>Choose status</option>",
                "<option>Low</option>",
                "<option>Done</option>'", 
                "<option>In progress</option>'", 
                "</select>",
                "<textarea class='input' data-storage=''placeholder='Notes'></textarea>",
                "</div>"].join(""); 
  }

  addChild(parentId){
    ++_check_item_js__WEBPACK_IMPORTED_MODULE_1__["default"].count;
    super.addChild(_check_item_js__WEBPACK_IMPORTED_MODULE_1__["default"].getId(),parentId);
  }
} 


/***/ }),

/***/ "./src/check-item.js":
/*!***************************!*\
  !*** ./src/check-item.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChecklistItem)
/* harmony export */ });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/component.js");
  
  class ChecklistItem extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static count=0;
  static getId() { 
    return 'CL-'+ChecklistItem.count;
  }

  constructor(){
    super();
    this.className = 'check-list';
    this.innerHTML = ["<div class='header'>",
               "<input class='input' id='checkbox' data-storage='' type='checkbox'></input>",
               "<input class='input' data-storage='' type='text' placeholder = 'Check item title'></input>",
    "</div>"].join(""); 
  }  
}


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component{
    className;
    innerHTML; 
  constructor(){
  }

  removeSelf(id){
    document.getElementById(id).firstChild.innerHTML+="<button id='"+id+"-remove-button'>-</button>";

    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
    });    
  }
}



/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/component.js");


class Container extends _component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  child;
  constructor(){
    super();
  }
  addChild(id, parentId){

    let content = document.createElement('div');
    content.id = id;
    content.innerHTML+= this.child.innerHTML;
    content.className = this.child.className;
    document.getElementById(parentId).lastChild.appendChild(content);

    let inputs = document.getElementById(parentId).getElementsByClassName('input');

    if(!document.getElementById(id).classList.contains('check-list')){
      document.getElementById(id).firstChild.innerHTML+="<button id='"+id+"-add-button' >+</button>";
    }

    this.removeSelf(id);

    document.getElementById(id+'-add-button').addEventListener('click', (e)=>{
      e.stopPropagation();
      this.child.addChild(id);
    });

    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.js */ "./src/container.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ "./src/card.js");


class List extends _container_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  static count = 0;
  static getId(){
    return 'L-'+List.count;
  }

  constructor(){
    super();
    this.child = new _card_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.className = 'list';
    this.innerHTML = "<div class='header'><input class='input' data-storage='' type='text' placeholder='List title'></input></div><div id='content'></div>";
  }

  addChild(parentId){
    super.addChild(_card_js__WEBPACK_IMPORTED_MODULE_1__["default"].getId(), parentId);
    ++_card_js__WEBPACK_IMPORTED_MODULE_1__["default"].count;
  }
}


/***/ }),

/***/ "./src/login-panel.js":
/*!****************************!*\
  !*** ./src/login-panel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _check_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-item */ "./src/check-item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session */ "./src/session.js");





class Login{

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
      localStorage.setItem(username.trim(), document.getElementById('pass').value);
      document.body.removeChild(this.div);
      this.session = new _session__WEBPACK_IMPORTED_MODULE_4__["default"](username.trim());
      document.getElementById('logout').addEventListener('click', ()=>{
        this.logOut(); 
        this.render();
      });
    }
  }

  logOut(){
    document.getElementById(this.session.username+'-session').dataset.checklist= _check_item__WEBPACK_IMPORTED_MODULE_1__["default"].count;
    document.getElementById(this.session.username+'-session').dataset.card = _card__WEBPACK_IMPORTED_MODULE_0__["default"].count;
    document.getElementById(this.session.username+'-session').dataset.list = _list__WEBPACK_IMPORTED_MODULE_2__["default"].count;
    document.getElementById(this.session.username+'-session').dataset.project = _project__WEBPACK_IMPORTED_MODULE_3__["default"].count;
    localStorage.setItem(this.session.username+'-session', JSON.stringify(document.body.innerHTML));


    document.body.innerHTML='';
  }

  logIn(username){
    document.body.innerHTML = '';
    this.session = new _session__WEBPACK_IMPORTED_MODULE_4__["default"](username);
    document.getElementById('logout').addEventListener('click', ()=>{
      this.logOut(); 
      this.render();
    });
    if(localStorage.getItem(username+'-session')){
      document.body.innerHTML = JSON.parse(localStorage.getItem(username+'-session'));
      let inputs = document.getElementsByClassName('input');
      for(let i=0; i<inputs.length; ++i){ 
        if(inputs[i].id == 'checkbox'&&inputs[i].dataset.storage=='on'){
          inputs[i].checked = true;
        }
        inputs[i].value = inputs[i].dataset.storage; 
      }

      _check_item__WEBPACK_IMPORTED_MODULE_1__["default"].count = document.getElementById(this.session.username+'-session').dataset.checklist;
      _card__WEBPACK_IMPORTED_MODULE_0__["default"].count = document.getElementById(this.session.username+'-session').dataset.card;
      _list__WEBPACK_IMPORTED_MODULE_2__["default"].count = document.getElementById(this.session.username+'-session').dataset.list;
      _project__WEBPACK_IMPORTED_MODULE_3__["default"].count = document.getElementById(this.session.username+'-session').dataset.project;
      
      this.updateButtonEvents();
    }
        

  }      
  
  updateButtonEvents(){

    const project = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](); 
    const list = new _list__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const card = new _card__WEBPACK_IMPORTED_MODULE_0__["default"]();

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



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");



class Project extends _container__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static count=0;
  static getId(){
    return 'P-'+Project.count;
  }
  constructor(){
    super();
    this.child = new _list__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.className = 'project';
    this.innerHTML = ["<div class='header'><input class='input' data-storage='' type='text' placeholder='Project title'></input></div><div class='content'></div>"].join("");
  }

  addChild(parentId){
    super.addChild(_list__WEBPACK_IMPORTED_MODULE_1__["default"].getId(), parentId);
    ++_list__WEBPACK_IMPORTED_MODULE_1__["default"].count;
  }
}


/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Session)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.js */ "./src/container.js");



class Session extends _container_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  constructor(username){
    super();
    this.username = username;
    this.child = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.innerHTML = ["<div id='"+this.username+"-session' class='session' data-checklist='' data-card='' data-list='' data-project''>",
                "<div class='header'>",
                "<button id='session-add-button'>+</button>",
                "<button id='logout'>Log Out</button>",
                "</div>",
                "<div class='content'>",
                "</div>",
                "</div>"].join("");  
    document.body.innerHTML = this.innerHTML;
    document.getElementById('session-add-button').addEventListener('click', ()=>{
      this.addChild(this.username+"-session");
    });
  }

  addChild(parentId){
    super.addChild(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getId(), parentId);
    ++_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].count;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/login-panel.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S29DO0FBQ1Y7O0FBRVgsc0JBQXNCLGtEQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbURBQVU7QUFDN0IsTUFBTSxtREFBVTtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUM7QUFDSTs7QUFFeEIsc0JBQXNCLHFEQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUJBQW1CLHlEQUFhO0FBQ2hDLE1BQU0seURBQWE7QUFDbkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jaGVjay1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naW4tcGFuZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXIuanNcIjtcbmltcG9ydCBDaGVja2xpc3RJdGVtIGZyb20gXCIuL2NoZWNrLWl0ZW0uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbnRhaW5lcntcbiAgc3RhdGljIGNvdW50PTA7XG4gIHN0YXRpYyBnZXRJZCgpe1xuICAgIHJldHVybiAnQy0nK0NhcmQuY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZCA9IG5ldyBDaGVja2xpc3RJdGVtKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBbXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlwiLFxuICAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDYXJkIHRpdGxlJz48L2lucHV0PlwiLFxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzID0gJ2NvbnRlbnQnPlwiLFxuICAgICAgICAgICAgICAgIFwiPHRleHRhcmVhIGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbic+PC90ZXh0YXJlYT5cIixcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSdkYXRlJyBwbGFjZWhvbGRlcj0nMjAyMi0xMC0xMCc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgICBcIjxzZWxlY3QgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9Jyc+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5DaG9vc2UgcHJpb3JpdHk8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+TG93PC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5IaWdoPC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8L3NlbGVjdD5cIixcbiAgICAgICAgICAgICAgICBcIjxzZWxlY3QgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9Jyc+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5DaG9vc2Ugc3RhdHVzPC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkxvdzwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5Eb25lPC9vcHRpb24+J1wiLCBcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+SW4gcHJvZ3Jlc3M8L29wdGlvbj4nXCIsIFxuICAgICAgICAgICAgICAgIFwiPC9zZWxlY3Q+XCIsXG4gICAgICAgICAgICAgICAgXCI8dGV4dGFyZWEgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JydwbGFjZWhvbGRlcj0nTm90ZXMnPjwvdGV4dGFyZWE+XCIsXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIl0uam9pbihcIlwiKTsgXG4gIH1cblxuICBhZGRDaGlsZChwYXJlbnRJZCl7XG4gICAgKytDaGVja2xpc3RJdGVtLmNvdW50O1xuICAgIHN1cGVyLmFkZENoaWxkKENoZWNrbGlzdEl0ZW0uZ2V0SWQoKSxwYXJlbnRJZCk7XG4gIH1cbn0gXG4iLCIgIGltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvdW50PTA7XG4gIHN0YXRpYyBnZXRJZCgpIHsgXG4gICAgcmV0dXJuICdDTC0nK0NoZWNrbGlzdEl0ZW0uY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnY2hlY2stbGlzdCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBbXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlwiLFxuICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBpZD0nY2hlY2tib3gnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSdjaGVja2JveCc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyID0gJ0NoZWNrIGl0ZW0gdGl0bGUnPjwvaW5wdXQ+XCIsXG4gICAgXCI8L2Rpdj5cIl0uam9pbihcIlwiKTsgXG4gIH0gIFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50e1xuICAgIGNsYXNzTmFtZTtcbiAgICBpbm5lckhUTUw7IFxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgcmVtb3ZlU2VsZihpZCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MKz1cIjxidXR0b24gaWQ9J1wiK2lkK1wiLXJlbW92ZS1idXR0b24nPi08L2J1dHRvbj5cIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKyctcmVtb3ZlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpOyBcbiAgICB9KTsgICAgXG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHtcbiAgY2hpbGQ7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBhZGRDaGlsZChpZCwgcGFyZW50SWQpe1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gaWQ7XG4gICAgY29udGVudC5pbm5lckhUTUwrPSB0aGlzLmNoaWxkLmlubmVySFRNTDtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IHRoaXMuY2hpbGQuY2xhc3NOYW1lO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKS5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0Jyk7XG5cbiAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stbGlzdCcpKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5maXJzdENoaWxkLmlubmVySFRNTCs9XCI8YnV0dG9uIGlkPSdcIitpZCtcIi1hZGQtYnV0dG9uJyA+KzwvYnV0dG9uPlwiO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlU2VsZihpZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCsnLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2hpbGQuYWRkQ2hpbGQoaWQpO1xuICAgIH0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8aW5wdXRzLmxlbmd0aDsgKytpKXsgXG4gICAgIGlucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpPT57XG4gICAgICAgaW5wdXRzW2ldLmRhdGFzZXQuc3RvcmFnZSA9IGlucHV0c1tpXS52YWx1ZTt9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29udGFpbmVye1xuICBzdGF0aWMgY291bnQgPSAwO1xuICBzdGF0aWMgZ2V0SWQoKXtcbiAgICByZXR1cm4gJ0wtJytMaXN0LmNvdW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGQgPSBuZXcgQ2FyZCgpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdoZWFkZXInPjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nTGlzdCB0aXRsZSc+PC9pbnB1dD48L2Rpdj48ZGl2IGlkPSdjb250ZW50Jz48L2Rpdj5cIjtcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudElkKXtcbiAgICBzdXBlci5hZGRDaGlsZChDYXJkLmdldElkKCksIHBhcmVudElkKTtcbiAgICArK0NhcmQuY291bnQ7XG4gIH1cbn1cbiIsImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCBDaGVja2xpc3RJdGVtIGZyb20gXCIuL2NoZWNrLWl0ZW1cIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBTZXNzaW9uIGZyb20gXCIuL3Nlc3Npb25cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2lue1xuXG4gIHVzZXJuYW1lO1xuICBzZXNzaW9uO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgaW5uZXJIVE1MID0gW1wiPGgyIGlkID0ndGl0bGUnPkNhbGwgaXQgYSBkYXk8L2gyPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjxwIGlkID0gJ2xvZ2luLXByb21wdCc+PC9wPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3MgPSd1c2VybmFtZSc+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPGxhYmVsIGZvcj0ndXNlcic+VXNlcm5hbWU8L2xhYmVsPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd1c2VyJyBpZCA9ICd1c3InPlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3MgPSdwYXNzd29yZCc+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPGxhYmVsIGZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG5hbWU9J3Bhc3N3b3JkJyBpZCA9ICdwYXNzJz5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGlucHV0PSdidXR0b25zJz5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8YnV0dG9uIGlkPSdsb2dpbic+TG9naW48L2J1dHRvbj5cIixcbiAgICAgICAgICAgICAgICAgICAgXCI8YnV0dG9uIGlkPSdzaWduLXVwJz5TaWduIHVwPC9idXR0b24+XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCJdLmpvaW4oJycpO1xuICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLmRpdi5pZCA9ICdwYW5lbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXYpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZWwnKS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB0aGlzLnVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzcicpLnZhbHVlO1xuICAgIGlmKCF0aGlzLnVzZXJuYW1lLnRyaW0oKXx8IWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzJykudmFsdWUudHJpbSgpKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcHJvbXB0JykuaW5uZXJIVE1MID0gJ1BsZWFzZSBlbnRlciB1c2VybmFtZS9wYXNzd29yZCc7IFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrVXNlcih0aGlzLnVzZXJuYW1lKTtcbiAgO30pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHRoaXMudXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNyJykudmFsdWU7XG4gICAgaWYoIXRoaXMudXNlcm5hbWUudHJpbSgpfHwhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MnKS52YWx1ZS50cmltKCkpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wcm9tcHQnKS5pbm5lckhUTUwgPSAnUGxlYXNlIGVudGVyIHVzZXJuYW1lL3Bhc3N3b3JkJzsgXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2lnblVwKHRoaXMudXNlcm5hbWUpOyBcbiAgfSk7XG59XG5cbiAgY2hlY2tVc2VyKHVzZXJuYW1lKXtcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c3InKS52YWx1ZSkpe1xuICAgICAgbGV0IHBhc3N3b3JkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNyJykudmFsdWUpKTtcbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzJykudmFsdWU9PXBhc3N3b3JkKXtcbiAgICAgICAgdGhpcy5sb2dJbih1c2VybmFtZSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXByb21wdCcpLmlubmVySFRNTCA9ICdXcm9uZyBwYXNzd29yZCc7IFxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wcm9tcHQnKS5pbm5lckhUTUwgPSAnVXNlciBkb2VzIG5vdCBleGl0LCBkbyB5b3Ugd2FudCB0byBzaWduIHVwPyc7XG4gICAgfVxuICB9IFxuXG4gIHNpZ25VcCh1c2VybmFtZSl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzcicpLnZhbHVlKSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcHJvbXB0JykuaW5uZXJIVE1MID0gJ1BsZWFzZSBMb2dpbic7XG4gICAgICByZXR1cm47XG4gICAgfWVsc2V7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1c2VybmFtZS50cmltKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzJykudmFsdWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmRpdik7XG4gICAgICB0aGlzLnNlc3Npb24gPSBuZXcgU2Vzc2lvbih1c2VybmFtZS50cmltKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgdGhpcy5sb2dPdXQoKTsgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBsb2dPdXQoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNlc3Npb24udXNlcm5hbWUrJy1zZXNzaW9uJykuZGF0YXNldC5jaGVja2xpc3Q9IENoZWNrbGlzdEl0ZW0uY291bnQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXNzaW9uLnVzZXJuYW1lKyctc2Vzc2lvbicpLmRhdGFzZXQuY2FyZCA9IENhcmQuY291bnQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXNzaW9uLnVzZXJuYW1lKyctc2Vzc2lvbicpLmRhdGFzZXQubGlzdCA9IExpc3QuY291bnQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXNzaW9uLnVzZXJuYW1lKyctc2Vzc2lvbicpLmRhdGFzZXQucHJvamVjdCA9IFByb2plY3QuY291bnQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zZXNzaW9uLnVzZXJuYW1lKyctc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MKSk7XG5cblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MPScnO1xuICB9XG5cbiAgbG9nSW4odXNlcm5hbWUpe1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zZXNzaW9uID0gbmV3IFNlc3Npb24odXNlcm5hbWUpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICB0aGlzLmxvZ091dCgpOyBcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0odXNlcm5hbWUrJy1zZXNzaW9uJykpe1xuICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVzZXJuYW1lKyctc2Vzc2lvbicpKTtcbiAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dCcpO1xuICAgICAgZm9yKGxldCBpPTA7IGk8aW5wdXRzLmxlbmd0aDsgKytpKXsgXG4gICAgICAgIGlmKGlucHV0c1tpXS5pZCA9PSAnY2hlY2tib3gnJiZpbnB1dHNbaV0uZGF0YXNldC5zdG9yYWdlPT0nb24nKXtcbiAgICAgICAgICBpbnB1dHNbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRzW2ldLnZhbHVlID0gaW5wdXRzW2ldLmRhdGFzZXQuc3RvcmFnZTsgXG4gICAgICB9XG5cbiAgICAgIENoZWNrbGlzdEl0ZW0uY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNlc3Npb24udXNlcm5hbWUrJy1zZXNzaW9uJykuZGF0YXNldC5jaGVja2xpc3Q7XG4gICAgICBDYXJkLmNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zZXNzaW9uLnVzZXJuYW1lKyctc2Vzc2lvbicpLmRhdGFzZXQuY2FyZDtcbiAgICAgIExpc3QuY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNlc3Npb24udXNlcm5hbWUrJy1zZXNzaW9uJykuZGF0YXNldC5saXN0O1xuICAgICAgUHJvamVjdC5jb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Vzc2lvbi51c2VybmFtZSsnLXNlc3Npb24nKS5kYXRhc2V0LnByb2plY3Q7XG4gICAgICBcbiAgICAgIHRoaXMudXBkYXRlQnV0dG9uRXZlbnRzKCk7XG4gICAgfVxuICAgICAgICBcblxuICB9ICAgICAgXG4gIFxuICB1cGRhdGVCdXR0b25FdmVudHMoKXtcblxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgpOyBcbiAgICBjb25zdCBsaXN0ID0gbmV3IExpc3QoKTtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiLWFkZC1idXR0b25cIl0nKTsgXG4gICAgbGV0IGJ1dHRvblBhcmVudDtcblxuICAgIGZvcihsZXQgcCA9IDE7IHA8YWRkQnV0dG9ucy5sZW5ndGg7ICsrcCl7XG4gICAgICBidXR0b25QYXJlbnQgPSBhZGRCdXR0b25zW3BdLnBhcmVudE5vZGU7IFxuICAgICAgaWYoYnV0dG9uUGFyZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lPT0ncHJvamVjdCcpe1xuICAgICAgICBhZGRCdXR0b25zW3BdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgIHByb2plY3QuYWRkQ2hpbGQoYWRkQnV0dG9uc1twXS5pZC5zdWJzdHJpbmcoMCxhZGRCdXR0b25zW3BdLmlkLnNlYXJjaCgnLWFkZC1idXR0b24nKSkpOyBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9Td2l0Y2ggc3RhdGVtZW50IHdvdWxkIHJlZHVjZSBudW1iZXIgb2YgbGluZXMgYnV0IGl0IGNyZWF0ZXMgZXZlbnQgcHJvcGFnYXRpb24gZm9yIGFuIG9kZCByZWFzb25cbiAgICBmb3IobGV0IGwgPSAxOyBsPGFkZEJ1dHRvbnMubGVuZ3RoOyArK2wpe1xuICAgICAgYnV0dG9uUGFyZW50ID0gYWRkQnV0dG9uc1tsXS5wYXJlbnROb2RlO1xuICAgICAgaWYoYnV0dG9uUGFyZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lPT0nbGlzdCcpe1xuICAgICAgICBhZGRCdXR0b25zW2xdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgIGxpc3QuYWRkQ2hpbGQoYWRkQnV0dG9uc1tsXS5pZC5zdWJzdHJpbmcoMCxhZGRCdXR0b25zW2xdLmlkLnNlYXJjaCgnLWFkZC1idXR0b24nKSkpOyBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGxldCBjID0gMTsgYzxhZGRCdXR0b25zLmxlbmd0aDsgKytjKXtcbiAgICAgIGJ1dHRvblBhcmVudCA9IGFkZEJ1dHRvbnNbY10ucGFyZW50Tm9kZTtcbiAgICAgIGlmKGJ1dHRvblBhcmVudC5wYXJlbnROb2RlLmNsYXNzTmFtZT09J2NhcmQnKXtcbiAgICAgICAgYWRkQnV0dG9uc1tjXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGNhcmQuYWRkQ2hpbGQoYWRkQnV0dG9uc1tjXS5pZC5zdWJzdHJpbmcoMCxhZGRCdXR0b25zW2NdLmlkLnNlYXJjaCgnLWFkZC1idXR0b24nKSkpOyBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nlc3Npb24tYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXNzaW9uLmFkZENoaWxkKHRoaXMudXNlcm5hbWUrXCItc2Vzc2lvblwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiLXJlbW92ZS1idXR0b25cIl0nKTtcblxuICAgIGZvcihsZXQgciA9IDA7IHI8cmVtb3ZlQnV0dG9ucy5sZW5ndGg7ICsrcil7XG4gICAgICByZW1vdmVCdXR0b25zW3JdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVtb3ZlQnV0dG9uc1tyXS5pZC5zdWJzdHJpbmcoMCxyZW1vdmVCdXR0b25zW3JdLmlkLnNlYXJjaCgnLXJlbW92ZS1idXR0b24nKSkpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVtb3ZlQnV0dG9uc1tyXS5pZC5zdWJzdHJpbmcoMCxyZW1vdmVCdXR0b25zW3JdLmlkLnNlYXJjaCgnLXJlbW92ZS1idXR0b24nKSkpKTtcbiAgICAgIH0pOyBcbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCBleHRlbmRzIENvbnRhaW5lciB7XG4gIHN0YXRpYyBjb3VudD0wO1xuICBzdGF0aWMgZ2V0SWQoKXtcbiAgICByZXR1cm4gJ1AtJytQcm9qZWN0LmNvdW50O1xuICB9XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkID0gbmV3IExpc3QoKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICB0aGlzLmlubmVySFRNTCA9IFtcIjxkaXYgY2xhc3M9J2hlYWRlcic+PGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQcm9qZWN0IHRpdGxlJz48L2lucHV0PjwvZGl2PjxkaXYgY2xhc3M9J2NvbnRlbnQnPjwvZGl2PlwiXS5qb2luKFwiXCIpO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50SWQpe1xuICAgIHN1cGVyLmFkZENoaWxkKExpc3QuZ2V0SWQoKSwgcGFyZW50SWQpO1xuICAgICsrTGlzdC5jb3VudDtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbiBleHRlbmRzIENvbnRhaW5lcntcbiAgY29uc3RydWN0b3IodXNlcm5hbWUpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMuY2hpbGQgPSBuZXcgUHJvamVjdCgpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gW1wiPGRpdiBpZD0nXCIrdGhpcy51c2VybmFtZStcIi1zZXNzaW9uJyBjbGFzcz0nc2Vzc2lvbicgZGF0YS1jaGVja2xpc3Q9JycgZGF0YS1jYXJkPScnIGRhdGEtbGlzdD0nJyBkYXRhLXByb2plY3QnJz5cIixcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2hlYWRlcic+XCIsXG4gICAgICAgICAgICAgICAgXCI8YnV0dG9uIGlkPSdzZXNzaW9uLWFkZC1idXR0b24nPis8L2J1dHRvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxidXR0b24gaWQ9J2xvZ291dCc+TG9nIE91dDwvYnV0dG9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdjb250ZW50Jz5cIixcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiLFxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCJdLmpvaW4oXCJcIik7ICBcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXNzaW9uLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMudXNlcm5hbWUrXCItc2Vzc2lvblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudElkKXtcbiAgICBzdXBlci5hZGRDaGlsZChQcm9qZWN0LmdldElkKCksIHBhcmVudElkKTtcbiAgICArK1Byb2plY3QuY291bnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==