//tasks 
//from harshit vashisth calss to code to do practice
//1. .isarrray method demonstraton
//2. primitive type of array demonstration
// 3. .push .pop .shift .unshift demontartion
// 4. array copy methods by - slice[] -...[] - .concat 

let A=[1,2,3,"one","two","three"]
const bool =Array.isArray(A)
A.push("push eliment")// this function will add element in last index
console.log(A)
let popElemt=A.pop()
console.log(popElemt) //this pop function will return remove the last index element
A.shift()  //this funtion will remove the 0th element of array
A.unshift("unshift ELement") // this will add element to 0th index without removing the last element
console.log(A)
// primitve vs reference data types

//primitive behaviour:
// there will not be change on original copy
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

//reference type: these data type share same refrence memeory thus chnges deplicts on both values
let B =A;
A.push("jabardsat")
console.log("array A ",A)
console.log("array B",B)
B.unshift("unshift element") // this chandges are vice versa acting on both data varables
console.log(A)
console.log(B)
// cloning array methods

let DemoAry =   [1,2,3,4,5,6,7,8,9,10]
let DemoAry2=   [1,2,3,4,5,6,7,8,9,10] // clone by simple assignment
console.log("clone by assigmnment same value",DemoAry==(DemoAry2))
let DemoAry3= DemoAry.slice(0)
console.log("clone by slice method",DemoAry==DemoAry3)
let DemoAry4= [].concat(DemoAry)
console.log("clone by concat method",DemoAry==DemoAry4)
let DemoAry5=[...DemoAry]
console.log(DemoAry==DemoAry5)
console.log(DemoAry)
console.log(DemoAry2)
console.log(DemoAry3)
console.log(DemoAry4)
console.log(DemoAry5)