//block scope vs function scope
// let and const are block scope = { under curlybraces}
//var is function scope 
function myApp(){
  if(true){
    var firstName ="harshit";
    //console.log(firstName);
  }
    console.log(firstName);
}

myApp(); 
