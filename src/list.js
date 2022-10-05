import Card from "./card";
import Product from "./product";

export default class List extends Product{
  constructor(title){
    super(title);
  }
  cards = [];

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
