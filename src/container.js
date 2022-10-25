import Component from './component.js';

export default class Container extends Component{
  constructor(){
    super();
  }
  addChild(node){
    let div = document.createElement('div');
    div.id = node.child.id;
    div.className = node.child.type;
    div.innerHTML = node.child.innerHTML;
    node.div.appendChild(div);

   document.getElementById(node.child.id+'-add-button').addEventListener('click', ()=>{node.child.addChild(child);});
   document.getElementById(node.child.id+'-remove-button').addEventListener('click', ()=>{node.child.removeChild(child.id);});
  }

  removeChild(id){
    document.getElementById(id).parentNode.removeChild(id); 
  }
}
