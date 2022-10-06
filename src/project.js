export default class Project {
  constructor(title,description){
      this.title = title; 
    this.description = description;
  }
  lists = [];
  addList(list){
    this.lists.push(list);
  }
  removeList(position){
    this.lists.splice(position);
  }
}
