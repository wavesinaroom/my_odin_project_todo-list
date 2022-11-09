"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["list"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/list.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7O0FBRTdCLG1CQUFtQixxREFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSw0REFBbUI7QUFDekIsbUJBQW1CLDREQUFtQjtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLEVBQXlDO0FBQ3pDLEVBQWlCLDRCQUE0QixxREFBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVDOztBQUV4Qix3QkFBd0IscURBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDdUM7QUFDVjtBQUNkLG1CQUFtQixxREFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzREFBVTtBQUM3QixNQUFNLHNEQUFVO0FBQ2hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2hlY2staXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXIuanNcIjtcbmltcG9ydCBDaGVja2xpc3RJdGVtIGZyb20gXCIuL2NoZWNrLWl0ZW0uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbnRhaW5lcntcbiAgc3RhdGljIGNvdW50PTA7XG4gIHN0YXRpYyBnZXRJZCgpe1xuICAgIHJldHVybiAnQy0nK0NhcmQuY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZCA9IG5ldyBDaGVja2xpc3RJdGVtKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBbXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlwiLFxuICAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdDYXJkIHRpdGxlJz48L2lucHV0PlwiLFxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzID0gJ2NvbnRlbnQnPlwiLFxuICAgICAgICAgICAgICAgIFwiPHRleHRhcmVhIGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbic+PC90ZXh0YXJlYT5cIixcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSdkYXRlJyBwbGFjZWhvbGRlcj0nMjAyMi0xMC0xMCc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgICBcIjxzZWxlY3QgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9Jyc+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5DaG9vc2UgcHJpb3JpdHk8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+TG93PC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPk1lZGl1bTwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5IaWdoPC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8L3NlbGVjdD5cIixcbiAgICAgICAgICAgICAgICBcIjxzZWxlY3QgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9Jyc+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uIHZhbHVlPScnIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5DaG9vc2Ugc3RhdHVzPC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkxvdzwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5Eb25lPC9vcHRpb24+J1wiLCBcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+SW4gcHJvZ3Jlc3M8L29wdGlvbj4nXCIsIFxuICAgICAgICAgICAgICAgIFwiPC9zZWxlY3Q+XCIsXG4gICAgICAgICAgICAgICAgXCI8dGV4dGFyZWEgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JydwbGFjZWhvbGRlcj0nTm90ZXMnPjwvdGV4dGFyZWE+XCIsXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIl0uam9pbihcIlwiKTsgXG4gIH1cblxuICBhZGRDaGlsZChwYXJlbnRJZCl7XG4gICAgKytDaGVja2xpc3RJdGVtLmNvdW50O1xuICAgIHN1cGVyLmFkZENoaWxkKENoZWNrbGlzdEl0ZW0uZ2V0SWQoKSxwYXJlbnRJZCk7XG4gIH1cbn0gXG4iLCIgIGltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvdW50PTA7XG4gIHN0YXRpYyBnZXRJZCgpIHsgXG4gICAgcmV0dXJuICdDTC0nK0NoZWNrbGlzdEl0ZW0uY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnY2hlY2stbGlzdCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBbXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlwiLFxuICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBpZD0nY2hlY2tib3gnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSdjaGVja2JveCc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyID0gJ0NoZWNrIGl0ZW0gdGl0bGUnPjwvaW5wdXQ+XCIsXG4gICAgXCI8L2Rpdj5cIl0uam9pbihcIlwiKTsgXG4gIH0gIFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50e1xuICAgIGNsYXNzTmFtZTtcbiAgICBpbm5lckhUTUw7IFxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgcmVtb3ZlU2VsZihpZCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MKz1cIjxidXR0b24gaWQ9J1wiK2lkK1wiLXJlbW92ZS1idXR0b24nPi08L2J1dHRvbj5cIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKyctcmVtb3ZlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpOyBcbiAgICB9KTsgICAgXG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHtcbiAgY2hpbGQ7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBhZGRDaGlsZChpZCwgcGFyZW50SWQpe1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gaWQ7XG4gICAgY29udGVudC5pbm5lckhUTUwrPSB0aGlzLmNoaWxkLmlubmVySFRNTDtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IHRoaXMuY2hpbGQuY2xhc3NOYW1lO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKS5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0Jyk7XG5cbiAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stbGlzdCcpKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5maXJzdENoaWxkLmlubmVySFRNTCs9XCI8YnV0dG9uIGlkPSdcIitpZCtcIi1hZGQtYnV0dG9uJyA+KzwvYnV0dG9uPlwiO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlU2VsZihpZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCsnLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2hpbGQuYWRkQ2hpbGQoaWQpO1xuICAgIH0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8aW5wdXRzLmxlbmd0aDsgKytpKXsgXG4gICAgIGlucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpPT57XG4gICAgICAgaW5wdXRzW2ldLmRhdGFzZXQuc3RvcmFnZSA9IGlucHV0c1tpXS52YWx1ZTt9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29udGFpbmVye1xuICBzdGF0aWMgY291bnQgPSAwO1xuICBzdGF0aWMgZ2V0SWQoKXtcbiAgICByZXR1cm4gJ0wtJytMaXN0LmNvdW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGQgPSBuZXcgQ2FyZCgpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2xpc3QnO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdoZWFkZXInPjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nTGlzdCB0aXRsZSc+PC9pbnB1dD48L2Rpdj48ZGl2IGlkPSdjb250ZW50Jz48L2Rpdj5cIjtcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudElkKXtcbiAgICBzdXBlci5hZGRDaGlsZChDYXJkLmdldElkKCksIHBhcmVudElkKTtcbiAgICArK0NhcmQuY291bnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==