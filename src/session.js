export default class Session {
  data = [];
  constructor(){
    if(localStorage.length!=0){
      for(let i = 0; i<localStorage.length; ++i){
       this.data[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
      }
    }
  }
  logData(){
    for(let i = 0; i<this.data.length; ++i){
      console.dir(this.data[i]);
    }
  }
}



