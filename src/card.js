import Container from "./container.js";
import ChecklistItem from "./check-item.js";

export default class Card extends Container{
  static count=0;
  static getId(){
    return 'C-'+Card.count;
  }

  constructor(){
    super();
    this.child = new ChecklistItem();
    this.className = 'card';
    this.innerHTML = ["<input class='input' data-storage='' type='text' placeholder='Card title'></input>",
                "<textarea class='input' data-storage='' placeholder='Description'></textarea>",
                "<input class='input' data-storage='' type='date' placeholder='2022-10-10'></input>",
                "<select class='input' data-storage='' placeholder='Choose priority'>",
                "<option>Low</option>",
                "<option>Medium</option>",
                "<option>High</option>",
                "</select>",
                "<select class='input' data-storage='' placeholder='Choose status'>",
                "<option>Done</option>'", 
                "<option>In progress</option>'", 
                "</select>",
                "<textarea class='input' data-storage=''placeholder='Notes'></textarea>"].join(""); 
  }

  addChild(parentId){
    ++ChecklistItem.count;
    super.addChild(ChecklistItem.getId(),parentId);
    alert(ChecklistItem.count);
  }
} 
