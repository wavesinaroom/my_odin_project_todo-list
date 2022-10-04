import Product from "./product";

export default class Card extends Product{
  constructor(title, description, dueDate){
    super(title);
    this.description = description;
    this.dueDate = new Date(dueDate); //use it when inputting from html https://stackoverflow.com/questions/28760254/assign-javascript-date-to-html5-datetime-local-input
  }
}
