import List from "./list";

export default class Project {

  static ID = 0;

  lists = [];
  title;
  description;

  constructor(session){
    this.session = session;
    this.id = 'P'+Project.ID;
    this.render = function (){
      let innerHTML = ["<textarea>", this.title, "</textarea",
                      "<section id='"+this.id+"-C'>",
                      "<button id='add-L'>Add</button>",
                      "</section>",
                      "<button id = 'delete-"+this.id+"'>Delete</button>"].join("");
      document.getElementById(this.id).innerHTML = innerHTML;
    }

    let div = document.createElement('div');
    div.id = this.id;
    div.className = 'project';
    document.body.appendChild(div);
    this.render();

    document.getElementById('add-L').addEventListener('click', ()=>{this.addList();});
    for(let i = 0; i<div.childElementCount; ++i){
      div.children[i].addEventListener('focusout', ()=>{
        this.title = div.children[i].value;
      });
    }
  }

  addList(){
    this.lists.push(new List(this));
    ++List.ID;
  }

  
  deleteSelf(){
    let position = 0;
    while(position<this.session.data.length&&this.description!=this.session.data[position].description){
      ++position;
    }
    this.session.data.splice(position,1);
    document.getElementById(this.id).parentNode.removeChild(document.getElementById(this.id));
  }
}
