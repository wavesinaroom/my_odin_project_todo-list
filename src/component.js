export default class Component{
    className;
    innerHTML; 
  constructor(){
  }

  removeSelf(id){
    document.getElementById(id).innerHTML+="<button id='"+id+"-remove-button'>Delete</button>";

    document.getElementById(id+'-remove-button').addEventListener('click', ()=>{
    document.getElementById(id).parentNode.removeChild(document.getElementById(id)); 
    });    
  }
}

