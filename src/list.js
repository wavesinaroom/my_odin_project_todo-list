import Card from "./card";

export default class List {

  static ID=0;

  cards = [];
  constructor(title){
    this.title = title;
    this.id = 'L'+List.ID;
    this.render = function (){
      let innerHTML = ["<textarea>", this.title,"</textarea>",
                      "<section id'"+this.id+"-C>",
                      "<button id='add-C'>Add</button>",
                      "</section>"].join("");
      document.getElementById(this.id).innerHTML = innerHTML;
    }

    let div = document.createElement('div');
    div.id = this.id;
    div.className = 'list';
    document.body.appendChild(div);
    this.render();

    document.getElementById('add-C').addEventListener('click', ()=>{this.addCard();});
  }

  addCard(){
    this.cards.push(new Card(this));
    ++Card.ID; 
  }
  
  removeCard(position){
    const deleteCount = 1;
    this.cards.splice(position,deleteCount);    
  }
}

