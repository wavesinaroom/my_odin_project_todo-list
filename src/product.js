export default class Product {
  constructor(title){
    this.title = title;
  }
  editTitle(title){
    this.title = title;  
  }
  destroy(){
    for(const key in this){
      delete this[key];
   }
  }
}
