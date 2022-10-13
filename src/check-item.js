export default class checklistItem  {
  constructor(){
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
    document.getElementById('delete-checkitem').addEventListener('click', ()=>{this.removeChecklistItem(description);});
  }

}
