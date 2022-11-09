"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["container"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/container.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUM7O0FBRXhCLHdCQUF3QixxREFBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50e1xuICAgIGNsYXNzTmFtZTtcbiAgICBpbm5lckhUTUw7IFxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG5cbiAgcmVtb3ZlU2VsZihpZCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MKz1cIjxidXR0b24gaWQ9J1wiK2lkK1wiLXJlbW92ZS1idXR0b24nPi08L2J1dHRvbj5cIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKyctcmVtb3ZlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpOyBcbiAgICB9KTsgICAgXG4gIH1cbn1cblxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudHtcbiAgY2hpbGQ7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBhZGRDaGlsZChpZCwgcGFyZW50SWQpe1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gaWQ7XG4gICAgY29udGVudC5pbm5lckhUTUwrPSB0aGlzLmNoaWxkLmlubmVySFRNTDtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IHRoaXMuY2hpbGQuY2xhc3NOYW1lO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKS5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0Jyk7XG5cbiAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stbGlzdCcpKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5maXJzdENoaWxkLmlubmVySFRNTCs9XCI8YnV0dG9uIGlkPSdcIitpZCtcIi1hZGQtYnV0dG9uJyA+KzwvYnV0dG9uPlwiO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlU2VsZihpZCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCsnLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2hpbGQuYWRkQ2hpbGQoaWQpO1xuICAgIH0pO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8aW5wdXRzLmxlbmd0aDsgKytpKXsgXG4gICAgIGlucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpPT57XG4gICAgICAgaW5wdXRzW2ldLmRhdGFzZXQuc3RvcmFnZSA9IGlucHV0c1tpXS52YWx1ZTt9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==