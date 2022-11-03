import Component from './component.js';

export default class Container extends Component{
  child;
  constructor(){
    super();
  }
  addChild(id, parentId){

    document.getElementById(parentId).appendChild(document.createElement('div')); 
    document.getElementById(parentId).lastChild.id = id;
    document.getElementById(parentId).lastChild.innerHTML = this.child.innerHTML;
    document.getElementById(parentId).lastChild.className = this.child.className;
    let inputs = document.getElementById(parentId).getElementsByClassName('input');

    if(!document.getElementById(id).classList.contains('check-list')){
      document.getElementById(id).innerHTML+="<button id='"+id+"-add-button'>Add</button>";
    }

    this.removeSelf(id);

    if(document.getElementById(id+'-add-button')){
      document.getElementById(id+'-add-button').addEventListener('click', (e)=>{
        e.stopPropagation();
        this.child.addChild(id);
      });
    }

    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}
