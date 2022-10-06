export default class List {

  cards = [];
  constructor(title){
    this.title = title;
  }

  addCard(card){
      this.cards.push(card);
  }
  removeCard(position){
    const deleteCount = 1;
    this.cards.splice(position,deleteCount);    
  }
}

