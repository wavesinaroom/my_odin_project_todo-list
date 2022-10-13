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
    div.innerHTML = this.innerHTML;
    document.body.appendChild(div)
    this.render();

    document.getElementById('Mycard-checklist').appendChild(div);
    document.getElementById('delete-'+this.id).addEventListener('click', ()=>{this.deleteSelf();});
  }
  
  deleteSelf(){
    let position = 0;
    while(position<this.card.checklist.length&&this.description!=this.card.checklist[position].description){
      ++position;
    }
    this.card.checklist.splice(position,1);
  }
}
