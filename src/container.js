import Component from './component.js';

export default class Container extends Component{
  child;
  constructor(){
    super();
  }
  addChild(id, parentId){
    alert(id);
    alert(parentId);
    document.getElementById(parentId).appendChild(document.createElement('div')); 
    document.getElementById(parentId).lastChild.id = id;
    document.getElementById(parentId).lastChild.innerHTML = this.child.innerHTML;
    document.getElementById(parentId).lastChild.className = this.child.className;

    if(document.getElementById(id).className!='check-list'){
      document.getElementById(id).innerHTML+="<button id='"+id+"-add-button'></button>";
      document.getElementById(id+'-add-button').addEventListener('click', ()=>{
       this.child.addChild(this.id);
      });
    }

    document.getElementById(id).innerHTML+="<button id='"+id+"-remove-button'></button>";

    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
    });    

    let inputs = document.getElementById(parentId).getElementsByClassName('input');
    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}
