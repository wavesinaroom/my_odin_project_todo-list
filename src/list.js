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
    this.className = 'list';
    this.innerHTML = "<input class='input' data-storage='' type='text' placeholder='List title'></input>";
  }

  addChild(parentId){
    super.addChild(Card.getId(), parentId);
    ++Card.count;
  }
}
