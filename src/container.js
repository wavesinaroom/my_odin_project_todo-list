import Component from './component.js';

export default class Container extends Component{
  constructor(){
    super();
  }
  addChild(id){
    let childDiv = document.createElement('div');
    childDiv.id = id;
    childDiv.className = this.child.type;
    childDiv.innerHTML = this.child.innerHTML;
    this.child.div = childDiv;
    this.div.appendChild(childDiv);
    
    if(this.child.type!='check-list'){
      let add = document.createElement('button');
      add.id = id+'-add-button';
      childDiv.appendChild(add);
      document.getElementById(id+'-add-button').addEventListener('click', ()=>{this.child.addChild(this.child);});
    }

    let remove = document.createElement('button');
    remove.id = id+'-remove-button'; 
    childDiv.appendChild(remove);

   document.getElementById(id+'-remove-button').addEventListener('click', ()=>{
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
    });    

    let inputs = childDiv.getElementsByClassName('input');
    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}
