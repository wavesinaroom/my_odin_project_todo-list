import Component from './component.js';

export default class Container extends Component{
  child;
  constructor(){
    super();
  }
  addChild(id, parentId){
  
    this.child.div.id = id;
    this.div.appendChild(this.child.div);
    
    if(this.child.type!='check-list'){
      this.child.div.innerHTML+="<button id='"+id+"-add-button'></button>";
      document.getElementById(id+'-add-button').addEventListener('click', ()=>{this.child.addChild(this.child, this.div.id);});
    }

    this.child.div.innerHTML+="<button id='"+id+"-remove-button'></button>";
    this.child.div.appendChild(remove);

    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
    });    

    let inputs = this.child.div.getElementsByClassName('input');
    for(let i=0; i<inputs.length; ++i){ 
     inputs[i].addEventListener('input', ()=>{
       inputs[i].dataset.storage = inputs[i].value;});
    }
  }
}
