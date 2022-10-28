import Container from "./container";
import List from "./list";

export default class Project extends Container {
  static count=0;
  static getId(){
    return 'P-'+Project.count;
  }
  constructor(){
    super();
    this.type = 'project';
    this.child = new List();
    this.innerHTML = ["<input class='input' data-storage='' type='text' placeholder='Project title'></input>"].join("");
  }
  addChild(){
    super.addChild(List.getId());
    ++List.count;
  }
}
