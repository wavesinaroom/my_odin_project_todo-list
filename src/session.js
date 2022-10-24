import Project from "./project";

export default class Session extends Container{
  type = 'session';
  child = new Project();
  div = document.createElement('div');
  innerHTML = ["<H1>Call it a day!</H1>",
              "<button id='session'>Add Project</button>"].join("");  
  constructor(){
    document.body.innerHTML = this.innerHTML;
  }
}
