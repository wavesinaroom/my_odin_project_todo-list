export default class List {

  cards = [];
  constructor(title){
    this.title = title;
  }

  addCard(card){
      this.cards.push(card);
  }
  removeCard(position){
    this.cards.slice(position);    
  }
}

