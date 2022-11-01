import Card from './card.js';
import ChecklistItem from './check-item.js';
import List from './list.js';
import Project from './project.js';

export default class EventManager{
  static instance;
  static getInstance(){
    if(EventManager.instance == null){
      EventManager.instance = new EventManager();
    }else{
      EventManager.instance = this;
    }
  }
  constructor(){

  }

  updateCounter(type){
    switch(type){
      case 'project':
        ++Project.count;
      case 'list':
        ++List.count;
      case 'card':
        ++Card.count;
      case 'check-list':
        ++ChecklistItem.count;
    }
  }
}
