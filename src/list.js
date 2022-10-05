import Card from "./card";
import Product from "./product";

export default class List extends Product{

  static draggedList=this;
  cards = [];
  constructor(title){
    super(title);
  }

  addCard(){
      this.cards.push(Card.draggedCard);
  }
  removeCard(){
    for(let i = 0; i<this.cards.length; ++i){
      if(this.cards[i]==Card.draggedCard){
        this.cards.splice(i,1);
      }
    }
  }
}
