"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["card"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/card.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7O0FBRTdCLG1CQUFtQixxREFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSw0REFBbUI7QUFDekIsbUJBQW1CLDREQUFtQjtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLEVBQXlDO0FBQ3pDLEVBQWlCLDRCQUE0QixxREFBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVDOztBQUV4Qix3QkFBd0IscURBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGFpbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyLmpzXCI7XG5pbXBvcnQgQ2hlY2tsaXN0SXRlbSBmcm9tIFwiLi9jaGVjay1pdGVtLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBDb250YWluZXJ7XG4gIHN0YXRpYyBjb3VudD0wO1xuICBzdGF0aWMgZ2V0SWQoKXtcbiAgICByZXR1cm4gJ0MtJytDYXJkLmNvdW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGQgPSBuZXcgQ2hlY2tsaXN0SXRlbSgpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gW1wiPGRpdiBjbGFzcz0naGVhZGVyJz5cIixcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQ2FyZCB0aXRsZSc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiLFxuICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcyA9ICdjb250ZW50Jz5cIixcbiAgICAgICAgICAgICAgICBcIjx0ZXh0YXJlYSBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyBwbGFjZWhvbGRlcj0nRGVzY3JpcHRpb24nPjwvdGV4dGFyZWE+XCIsXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JycgdHlwZT0nZGF0ZScgcGxhY2Vob2xkZXI9JzIwMjItMTAtMTAnPjwvaW5wdXQ+XCIsXG4gICAgICAgICAgICAgICAgXCI8c2VsZWN0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+Q2hvb3NlIHByaW9yaXR5PC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkxvdzwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5NZWRpdW08L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+SGlnaDwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPC9zZWxlY3Q+XCIsXG4gICAgICAgICAgICAgICAgXCI8c2VsZWN0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbiB2YWx1ZT0nJyBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+Q2hvb3NlIHN0YXR1czwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5Mb3c8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+RG9uZTwvb3B0aW9uPidcIiwgXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkluIHByb2dyZXNzPC9vcHRpb24+J1wiLCBcbiAgICAgICAgICAgICAgICBcIjwvc2VsZWN0PlwiLFxuICAgICAgICAgICAgICAgIFwiPHRleHRhcmVhIGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScncGxhY2Vob2xkZXI9J05vdGVzJz48L3RleHRhcmVhPlwiLFxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCJdLmpvaW4oXCJcIik7IFxuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50SWQpe1xuICAgICsrQ2hlY2tsaXN0SXRlbS5jb3VudDtcbiAgICBzdXBlci5hZGRDaGlsZChDaGVja2xpc3RJdGVtLmdldElkKCkscGFyZW50SWQpO1xuICB9XG59IFxuIiwiICBpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tsaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb3VudD0wO1xuICBzdGF0aWMgZ2V0SWQoKSB7IFxuICAgIHJldHVybiAnQ0wtJytDaGVja2xpc3RJdGVtLmNvdW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2NoZWNrLWxpc3QnO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gW1wiPGRpdiBjbGFzcz0naGVhZGVyJz5cIixcbiAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgaWQ9J2NoZWNrYm94JyBkYXRhLXN0b3JhZ2U9JycgdHlwZT0nY2hlY2tib3gnPjwvaW5wdXQ+XCIsXG4gICAgICAgICAgICAgICBcIjxpbnB1dCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlciA9ICdDaGVjayBpdGVtIHRpdGxlJz48L2lucHV0PlwiLFxuICAgIFwiPC9kaXY+XCJdLmpvaW4oXCJcIik7IFxuICB9ICBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHtcbiAgICBjbGFzc05hbWU7XG4gICAgaW5uZXJIVE1MOyBcbiAgY29uc3RydWN0b3IoKXtcbiAgfVxuXG4gIHJlbW92ZVNlbGYoaWQpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5maXJzdENoaWxkLmlubmVySFRNTCs9XCI8YnV0dG9uIGlkPSdcIitpZCtcIi1yZW1vdmUtYnV0dG9uJz4tPC9idXR0b24+XCI7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCsnLXJlbW92ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTsgXG4gICAgfSk7ICAgIFxuICB9XG59XG5cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNoaWxkO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYWRkQ2hpbGQoaWQsIHBhcmVudElkKXtcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IGlkO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MKz0gdGhpcy5jaGlsZC5pbm5lckhUTUw7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSB0aGlzLmNoaWxkLmNsYXNzTmFtZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCkubGFzdENoaWxkLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dCcpO1xuXG4gICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLWxpc3QnKSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZmlyc3RDaGlsZC5pbm5lckhUTUwrPVwiPGJ1dHRvbiBpZD0nXCIraWQrXCItYWRkLWJ1dHRvbicgPis8L2J1dHRvbj5cIjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZVNlbGYoaWQpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQrJy1hZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNoaWxkLmFkZENoaWxkKGlkKTtcbiAgICB9KTtcblxuICAgIGZvcihsZXQgaT0wOyBpPGlucHV0cy5sZW5ndGg7ICsraSl7IFxuICAgICBpbnB1dHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xuICAgICAgIGlucHV0c1tpXS5kYXRhc2V0LnN0b3JhZ2UgPSBpbnB1dHNbaV0udmFsdWU7fSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=