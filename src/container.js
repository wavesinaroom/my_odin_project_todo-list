export default class Container extends Component{
  children = [];
  child;
  addChild(){
    this.children.push(child.innertHTML);
  }

  removeChild(position){
    const count = 1;
    this.children.splice(position, count);
  }
}
