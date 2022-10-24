import List from "./list"
export default class Project extends Container {
  static count;
  static id = 'P-'+count;
  type = 'project';
  child = new List();
  innerHTML = ["<textarea placeholder='Project title'></textarea>",
              "<button id='"+Project.id+"-add-button'>Add</button>",
              "<button id'"+Project.id+"-remove-button'>Delete</button>"].join("");
}
