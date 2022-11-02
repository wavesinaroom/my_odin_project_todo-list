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

    if(this.child.className != 'check-list'){
      document.getElementById(id).innerHTML+="<button id='"+id+"-add-button'>Add</button>";
      const add = document.getElementById(id+'-add-button');
      add.addEventListener('click', (e)=>{
        alert(e.currentTarget);
        e.stopPropagation();
        this.child.addChild(id);
      });
    }

    this.removeSelf(id);

    let inputs = document.getElementById(parentId).getElementsByClassName('input');
    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}
