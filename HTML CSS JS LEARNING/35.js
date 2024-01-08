//array destructing to variaable
//reverse intialization in variables
const myArray = ["value1", "value2", "value3","value4"];
let [myvar1,myvar2,myvar3]=myArray;
let [index0,...restArray]=myArray;
console.log(myvar1,myvar2,myvar3,...restArray,index0)
