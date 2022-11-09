"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["checklistitem"],{

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/check-item.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tsaXN0aXRlbS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxFQUF5QztBQUN6QyxFQUFpQiw0QkFBNEIscURBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvdW50PTA7XG4gIHN0YXRpYyBnZXRJZCgpIHsgXG4gICAgcmV0dXJuICdDTC0nK0NoZWNrbGlzdEl0ZW0uY291bnQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnY2hlY2stbGlzdCc7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBbXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlwiLFxuICAgICAgICAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2lucHV0JyBpZD0nY2hlY2tib3gnIGRhdGEtc3RvcmFnZT0nJyB0eXBlPSdjaGVja2JveCc+PC9pbnB1dD5cIixcbiAgICAgICAgICAgICAgIFwiPGlucHV0IGNsYXNzPSdpbnB1dCcgZGF0YS1zdG9yYWdlPScnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyID0gJ0NoZWNrIGl0ZW0gdGl0bGUnPjwvaW5wdXQ+XCIsXG4gICAgXCI8L2Rpdj5cIl0uam9pbihcIlwiKTsgXG4gIH0gIFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50e1xuICAgIGNsYXNzTmFtZTtcbiAgICBpbm5lckhUTUw7IFxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgcmVtb3ZlU2VsZihpZCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MKz1cIjxidXR0b24gaWQ9J1wiK2lkK1wiLXJlbW92ZS1idXR0b24nPi08L2J1dHRvbj5cIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKyctcmVtb3ZlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpOyBcbiAgICB9KTsgICAgXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9