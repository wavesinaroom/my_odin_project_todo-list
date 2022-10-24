import Component from './component.js';
export default class Container extends Component{
  child;

  addChild(){
    
    id = ()=>{
      let id;
      switch(child.type){
        case 'check-item':
          id = ChecklistItem.id;
          ChecklistItem.count++;
        case 'card':
          id = Card.id;
          Card.count++;
        case 'list':
          id = List.id;
          List.count++;
        case 'project':
          id = Project.id;
          Project.count++;
        case 'session':
          id = 'session';
      }
      return id;
    }  

    this.innertHTML += "<div 'id="+id+" class="+child.type+">"+child.innertHTML+"</div>";
    document.getElementById(id+'-add-button').addEventListener('click', ()=>{child.addChild();});
    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{child.removeChild(id);});
  }

  removeChild(id){
    document.getElementById(id).parentNode.removeChild(id); 
  }
}
