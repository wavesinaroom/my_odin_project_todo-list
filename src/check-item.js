import Card from "./card";

export default class ChecklistItem  {
  static checkItemID=0;
  constructor(card){
    this.card = card;
    this.check = false;
    this.description = "Description";
    this.id = Card.ID+'-checklist-item-'+ChecklistItem.checkItemID;

    this.render = function (){
      let innerHTML = ["<input type='checkbox'></input>",
                       "<textarea>A card</textarea>",
                       "<button id = 'delete-"+this.id+"'>Delete</button>"].join("");  
      document.getElementById(this.id).innerHTML = innerHTML;
    }
    
    let div = document.createElement('div');
    div.id = this.id; 
    document.getElementById('Mycard-checklist').appendChild(div);
    this.render();

    
    document.getElementById('delete-'+this.id).addEventListener('click', ()=>{this.deleteSelf();});

    for(let i = 0; i<div.children.length-1; ++i){
      div.children[i].addEventListener('focusout', ()=>{this.saveChanges();});
    }
  }
  
  deleteSelf(){
    let position = 0;
    while(position<this.card.checklist.length&&this.description!=this.card.checklist[position].description){
      ++position;
    }
    this.card.checklist.splice(position,1);
    document.getElementById(this.id).parentNode.removeChild(document.getElementById(this.id));
  }

  saveChanges(){
    alert('Got in');
    this.check = document.getElementById(this.id).children[0].value; 
    this.description = document.getElementById(this.id).children[1].value;
  }
}
