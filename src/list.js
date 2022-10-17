import Card from "./card";

export default class List {

  static ID=0;

  cards = [];
  title; 

  constructor(project){
    this.project = project;
    this.id = 'L'+List.ID;
    this.render = function (){
      let innerHTML = ["<textarea placeholder='List Title'></textarea>",
                      "<section id='"+this.id+"-C'>",
                      "<button id='add-C'>Add</button>",
                      "</section>",
                      "<button id = 'delete-"+this.id+"'>Delete</button>"].join("");
      document.getElementById(this.id).innerHTML = innerHTML;
    }

    let div = document.createElement('div');
    div.id = this.id;
    div.className = 'list';
    document.getElementById(this.project.id).appendChild(div); 
    this.render();

    document.getElementById('add-C').addEventListener('click', ()=>{this.addCard();});
    document.getElementById('delete-'+this.id).addEventListener('click',  ()=>{this.deleteSelf();});
    div.children[0].addEventListener('focusout', ()=>{
      this.title = div.children[0].value;
    });
  }

  addCard(){
    this.cards.push(new Card(this));
    ++Card.ID; 
  }

  deleteSelf(){
    let position = 0;
    while(position<this.project.lists.length&&this.description!=this.project.lists[position].description){
      ++position;
    }
    this.project.lists.splice(position,1);
    document.getElementById(this.id).parentNode.removeChild(document.getElementById(this.id));
  }
}

