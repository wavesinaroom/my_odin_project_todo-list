import Container from "./container.js";
export default class List extends Container{
  static count = 0;
  static getId(){
    return 'L-'+List.count;
  }

  constructor(){
    super();
    this.type = 'list';
    this.innerHTML = "<textarea placeholder='List Title'></textarea>";
  }
}
