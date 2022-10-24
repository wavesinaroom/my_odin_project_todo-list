import ChecklistItem from "./check-item";
export default class Card extends Container{
  static count;
  static id = 'C-'+count;
  type = 'card';
  child = new ChecklistItem();
      innerHTML = ["<textarea placeholder='Title'></textarea>",
                      "<textarea placeholder='Description'></textarea>",
                      "<input type='date' placeholder='2022-10-10'></input>",
                      "<section>",
                      "<button id='"+Card.id+"-add-button'>Add</button>",
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
                      "<textarea placeholder='Notes'></textarea>",
                      "<button id'"+Card.id+"-remove-button'>Delete</button>"].join(""); 
} 
