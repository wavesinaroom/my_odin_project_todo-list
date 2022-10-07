export default class List {

  cards = [];
  constructor(title){
    this.title = title;
    
    if(!localStorage.getItem(this.title))
      localStorage.setItem(this.title, JSON.stringify(this));
  }

  addCard(card){
      this.cards.push(card);
  }
  removeCard(position){
    const deleteCount = 1;
    this.cards.splice(position,deleteCount);    
  }
}

