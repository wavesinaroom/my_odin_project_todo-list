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
    const deleteCount = 1;
    this.lists.splice(position, deleteCount);
  }
}
