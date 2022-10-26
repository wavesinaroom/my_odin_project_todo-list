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
    this.type = 'card';
    this.innerHTML = ["<input type='text' placeholder='Title'></input>",
                "<textarea placeholder='Description'></textarea>",
                "<input type='date' placeholder='2022-10-10'></input>",
                "<section>",
                "</section>",
                "<select name='priority'>",
                "<option>Low</option>",
                "<option>Medium</option>",
                "<option>High</option>",
                "</select>",
                "<select name='status'>",
                "<option>Done</option>'", 
                "<option>In progress</option>'", 
                "</select>",
                "<textarea placeholder='Notes'></textarea>"].join(""); 
  }
  addChild(){
    super.addChild(ChecklistItem.getId());
    ++ChecklistItem.count;
  }

} 
