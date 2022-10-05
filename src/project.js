import Product from "./product";

export default class Project extends Product{
  constructor(title,description){
    super(title);
    this.description = description;
  }
  lists = [];

  swapLists(from,to){
    let swap = this.lists[to];
    this.lists[to] = from;
    this.lists[from] = swap;
  } 
}
