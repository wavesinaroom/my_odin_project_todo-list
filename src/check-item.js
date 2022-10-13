import Card from "./card";

export default class checklistItem  {
  constructor(card){
    this.card = card;
    this.check = false;
    this.description = "Description";

    this.render = function (){
      let innerHTML = ["<input type='checkbox'></input>",
                       "<textarea>A card</textarea>",
                       "<button id = 'delete-checkitem'>Delete</button>"].join("");  
      document.getElementById('checklist').innerHTML = innerHTML;
    }
    
    let div = document.createElement('div');
    div.id = 'checklist';
    div.innerHTML = this.innerHTML;
    document.body.appendChild(div)
    this.render();

    document.getElementById('Mycard-checklist').appendChild(div);
    document.getElementById('delete-checkitem').addEventListener('click', ()=>{this.deleteSelf();});
  }
  
  deleteSelf(){
    alert('got in');
    let position = 0;
    while(position<this.card.checklist.length&&this.description!=this.card.checklist[position].description){
      ++position;
    }
    this.card.checklist.splice(position,1);
    this.card.logChecklist();
  }
}
