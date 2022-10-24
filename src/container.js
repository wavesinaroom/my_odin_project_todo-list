export default class Container extends Component{
  child;

  addChild(){
    
    id = ()=>{
      switch(child.type){
        case 'check-item':
          div.id = ChecklistItem.id;
          ChecklistItem.count++;
        case 'card':
          div.id = Card.id;
          Card.count++;
        case 'list':
          div.id = List.id;
          List.count++;
        case 'project':
          div.id = Project.id;
          Project.count++;
      }
      return id;
    }  

    this.innertHTML += "<div 'id="+id+">"+child.innertHTML+"</div>";
    document.getElementById(id+'-add-button').addEventListener('click', ()=>{child.addChild();});
    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{child.removeChild(id);});
  }

  removeChild(id){
    document.getElementById(id).parentNode.removeChild(id); 
  }
}
