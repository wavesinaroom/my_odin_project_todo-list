import Product from "./product";

export default class Card extends Product{
  constructor(title, description){
    super(title);
    this.description = description;
  }
}
