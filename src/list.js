import Container from "./container.js";
import Card from "./card.js";
export default class List extends Container{
  static count = 0;
  static getId(){
    return 'L-'+List.count;
  }

  constructor(){
    super();
    this.child = new Card();
    this.div.className = 'list';
    this.div.innerHTML = "<input class='input' data-storage='' type='text' placeholder='List Title'></input>";
  }
  addChild(){
    super.addChild(Card.getId());
    ++Card.count;
  }
}
