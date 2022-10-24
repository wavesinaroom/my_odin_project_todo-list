import Container from "./container.js";
import Card from "./card.js";
export default class List extends Container{
  static count;
  static id = 'L-'+List.count;
  type = 'list';
  child = new Card();
  innerHTML = ["<textarea placeholder='List Title'></textarea>",
              "<button id='"+List.id+"-add-button'>Add</button>",
              "<button id'"+List.id+"-remove-button'>Delete</button>"].join("");
}
