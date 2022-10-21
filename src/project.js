export default class Project {

  static ID = 0;

  lists = [];
  title;
  description;

  constructor(session){
    this.session = session;
    this.id = 'P'+Project.ID;
    this.render = function (){
      let innerHTML = ["<textarea placeholder='Project title'></textarea>",
                      "<button id='add-L'>Add List</button>",
                      "<button id = 'delete-"+this.id+"'>Delete Project</button>",
                      "<section id='"+this.id+"-L'>",
                      "</section>"].join("");
      document.getElementById(this.id).innerHTML = innerHTML;
    }

    let div = document.createElement('div');
    div.id = this.id;
    div.className = 'project';
    document.getElementById(this.session.id).appendChild(div); 
    this.render();

    document.getElementById('add-L').addEventListener('click', ()=>{this.addList();});
    document.getElementById('delete-'+this.id).addEventListener('click', ()=>{this.deleteSelf();});
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
