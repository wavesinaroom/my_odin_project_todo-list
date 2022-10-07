export default class Project {
  constructor(title,description){
    this.title = title; 
    this.description = description;

    if(!localStorage.getItem(this.title))
      localStorage.setItem(this.title, JSON.stringify(this));
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
