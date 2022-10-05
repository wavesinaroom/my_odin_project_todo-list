import Product from "./product";

export default class Project extends Product{
  constructor(title,description){
    super(title);
    this.description = description;
  }
}
