import Container from "./container.js";
import Card from "./card.js";
export default class List extends Container{
  static count = 0;
  static getId(){
    return 'L-'+List.count;
  }

  constructor(){
    super();
    this.type = 'list';
    this.child = new Card();
    this.innerHTML = "<input type='text' placeholder='List Title'></input>";
  }
  addChild(){
    super.addChild(Card.getId());
    ++Card.count;
  }
}
