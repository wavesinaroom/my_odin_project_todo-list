import Component from './component.js';

export default class Container extends Component{
  constructor(){
    super();
  }
  addChild(id){
    let div = document.createElement('div');
    div.id = id;
    div.className = this.child.type;
    div.innerHTML = this.child.innerHTML;
    this.div.appendChild(div);

   document.getElementById(id+'-add-button').addEventListener('click', ()=>{this.child.addChild(this.child);});
   document.getElementById(id+'-remove-button').addEventListener('click', ()=>{this.child.removeChild(id);});
  }

  removeChild(id){
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
  }
}
