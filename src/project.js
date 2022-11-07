import Container from "./container";
import List from "./list";

export default class Project extends Container {
  static count=0;
  static getId(){
    return 'P-'+Project.count;
  }
  constructor(){
    super();
    this.child = new List();
    this.className = 'project';
    this.innerHTML = ["<div class='header'><input class='input' data-storage='' type='text' placeholder='Project title'></input></div><div class='content'></div>"].join("");
  }

  addChild(parentId){
    super.addChild(List.getId(), parentId);
    ++List.count;
  }
}
