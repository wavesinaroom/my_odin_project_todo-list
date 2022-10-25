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
    
    let add = document.createElement('button');
    add.id = id+'-add-button';
    childDiv.appendChild(add);

    let remove = document.createElement('button');
    remove.id = id+'-remove-button'; 
    childDiv.appendChild(remove);

    this.div.appendChild(childDiv);

   document.getElementById(id+'-add-button').addEventListener('click', ()=>{this.child.addChild(this.child);});
   document.getElementById(id+'-remove-button').addEventListener('click', ()=>{this.child.removeChild(id);});
  }

  removeChild(id){
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
  }
}
