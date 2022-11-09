"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["project"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7O0FBRTdCLG1CQUFtQixxREFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSw0REFBbUI7QUFDekIsbUJBQW1CLDREQUFtQjtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLEVBQXlDO0FBQ3pDLEVBQWlCLDRCQUE0QixxREFBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVDOztBQUV4Qix3QkFBd0IscURBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDdUM7QUFDVjtBQUNkLG1CQUFtQixxREFBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzREFBVTtBQUM3QixNQUFNLHNEQUFVO0FBQ2hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJvQztBQUNWOztBQUVYLHNCQUFzQixrREFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1EQUFVO0FBQzdCLE1BQU0sbURBQVU7QUFDaEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jaGVjay1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IENoZWNrbGlzdEl0ZW0gZnJvbSBcIi4vY2hlY2staXRlbS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgQ29udGFpbmVye1xuICBzdGF0aWMgY291bnQ9MDtcbiAgc3RhdGljIGdldElkKCl7XG4gICAgcmV0dXJuICdDLScrQ2FyZC5jb3VudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkID0gbmV3IENoZWNrbGlzdEl0ZW0oKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICB0aGlzLmlubmVySFRNTCA9IFtcIjxkaXYgY2xhc3M9J2hlYWRlcic+XCIsXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JycgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0NhcmQgdGl0bGUnPjwvaW5wdXQ+XCIsXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIixcbiAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3MgPSAnY29udGVudCc+XCIsXG4gICAgICAgICAgICAgICAgXCI8dGV4dGFyZWEgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JycgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uJz48L3RleHRhcmVhPlwiLFxuICAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J2RhdGUnIHBsYWNlaG9sZGVyPScyMDIyLTEwLTEwJz48L2lucHV0PlwiLFxuICAgICAgICAgICAgICAgIFwiPHNlbGVjdCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJz5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24gdmFsdWU9JycgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPkNob29zZSBwcmlvcml0eTwvb3B0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5Mb3c8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+TWVkaXVtPC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkhpZ2g8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjwvc2VsZWN0PlwiLFxuICAgICAgICAgICAgICAgIFwiPHNlbGVjdCBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJz5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24gdmFsdWU9JycgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPkNob29zZSBzdGF0dXM8L29wdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcIjxvcHRpb24+TG93PC9vcHRpb24+XCIsXG4gICAgICAgICAgICAgICAgXCI8b3B0aW9uPkRvbmU8L29wdGlvbj4nXCIsIFxuICAgICAgICAgICAgICAgIFwiPG9wdGlvbj5JbiBwcm9ncmVzczwvb3B0aW9uPidcIiwgXG4gICAgICAgICAgICAgICAgXCI8L3NlbGVjdD5cIixcbiAgICAgICAgICAgICAgICBcIjx0ZXh0YXJlYSBjbGFzcz0naW5wdXQnIGRhdGEtc3RvcmFnZT0nJ3BsYWNlaG9sZGVyPSdOb3Rlcyc+PC90ZXh0YXJlYT5cIixcbiAgICAgICAgICAgICAgICBcIjwvZGl2PlwiXS5qb2luKFwiXCIpOyBcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudElkKXtcbiAgICArK0NoZWNrbGlzdEl0ZW0uY291bnQ7XG4gICAgc3VwZXIuYWRkQ2hpbGQoQ2hlY2tsaXN0SXRlbS5nZXRJZCgpLHBhcmVudElkKTtcbiAgfVxufSBcbiIsIiAgaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrbGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY291bnQ9MDtcbiAgc3RhdGljIGdldElkKCkgeyBcbiAgICByZXR1cm4gJ0NMLScrQ2hlY2tsaXN0SXRlbS5jb3VudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdjaGVjay1saXN0JztcbiAgICB0aGlzLmlubmVySFRNTCA9IFtcIjxkaXYgY2xhc3M9J2hlYWRlcic+XCIsXG4gICAgICAgICAgICAgICBcIjxpbnB1dCBjbGFzcz0naW5wdXQnIGlkPSdjaGVja2JveCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J2NoZWNrYm94Jz48L2lucHV0PlwiLFxuICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBkYXRhLXN0b3JhZ2U9JycgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXIgPSAnQ2hlY2sgaXRlbSB0aXRsZSc+PC9pbnB1dD5cIixcbiAgICBcIjwvZGl2PlwiXS5qb2luKFwiXCIpOyBcbiAgfSAgXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnR7XG4gICAgY2xhc3NOYW1lO1xuICAgIGlubmVySFRNTDsgXG4gIGNvbnN0cnVjdG9yKCl7XG4gIH1cblxuICByZW1vdmVTZWxmKGlkKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZmlyc3RDaGlsZC5pbm5lckhUTUwrPVwiPGJ1dHRvbiBpZD0nXCIraWQrXCItcmVtb3ZlLWJ1dHRvbic+LTwvYnV0dG9uPlwiO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQrJy1yZW1vdmUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7IFxuICAgIH0pOyAgICBcbiAgfVxufVxuXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjaGlsZDtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICB9XG4gIGFkZENoaWxkKGlkLCBwYXJlbnRJZCl7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBpZDtcbiAgICBjb250ZW50LmlubmVySFRNTCs9IHRoaXMuY2hpbGQuaW5uZXJIVE1MO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gdGhpcy5jaGlsZC5jbGFzc05hbWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmxhc3RDaGlsZC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJZCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQnKTtcblxuICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay1saXN0Jykpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MKz1cIjxidXR0b24gaWQ9J1wiK2lkK1wiLWFkZC1idXR0b24nID4rPC9idXR0b24+XCI7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVTZWxmKGlkKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKyctYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jaGlsZC5hZGRDaGlsZChpZCk7XG4gICAgfSk7XG5cbiAgICBmb3IobGV0IGk9MDsgaTxpbnB1dHMubGVuZ3RoOyArK2kpeyBcbiAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PntcbiAgICAgICBpbnB1dHNbaV0uZGF0YXNldC5zdG9yYWdlID0gaW5wdXRzW2ldLnZhbHVlO30pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXIuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb250YWluZXJ7XG4gIHN0YXRpYyBjb3VudCA9IDA7XG4gIHN0YXRpYyBnZXRJZCgpe1xuICAgIHJldHVybiAnTC0nK0xpc3QuY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZCA9IG5ldyBDYXJkKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnbGlzdCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9J2hlYWRlcic+PGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdMaXN0IHRpdGxlJz48L2lucHV0PjwvZGl2PjxkaXYgaWQ9J2NvbnRlbnQnPjwvZGl2PlwiO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50SWQpe1xuICAgIHN1cGVyLmFkZENoaWxkKENhcmQuZ2V0SWQoKSwgcGFyZW50SWQpO1xuICAgICsrQ2FyZC5jb3VudDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCBleHRlbmRzIENvbnRhaW5lciB7XG4gIHN0YXRpYyBjb3VudD0wO1xuICBzdGF0aWMgZ2V0SWQoKXtcbiAgICByZXR1cm4gJ1AtJytQcm9qZWN0LmNvdW50O1xuICB9XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkID0gbmV3IExpc3QoKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICB0aGlzLmlubmVySFRNTCA9IFtcIjxkaXYgY2xhc3M9J2hlYWRlcic+PGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQcm9qZWN0IHRpdGxlJz48L2lucHV0PjwvZGl2PjxkaXYgY2xhc3M9J2NvbnRlbnQnPjwvZGl2PlwiXS5qb2luKFwiXCIpO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50SWQpe1xuICAgIHN1cGVyLmFkZENoaWxkKExpc3QuZ2V0SWQoKSwgcGFyZW50SWQpO1xuICAgICsrTGlzdC5jb3VudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9