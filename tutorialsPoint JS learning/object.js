/* 
1   Encapsulation: the capability to store related information, whether data 
or methods, together in an object.
2   Aggregation: the capability to store one object inside another object.
3    Inheritance: the capability of a class to rely upon another class (or 
number of classes) for some of its properties and methods.
4   Polymorphism: the capability to write one function or method that works 
in a variety of different ways. 
*/
// javascript is obecty based almost wevery thin here is encapsulated as object
// 0. define fuction as a object
// 1. method to object :difine object properties by using another function calling it as method to object
// 2. object as key value pair 
// 3. allocation of key value pairs from vaialbles inter linking thought diffrent objects 
// 4. this key word in object 
// 5. use of with key word
list = new Object()
list.rolNO= 56
list.category=4
// console.log(list)
var employee = new Object();
var books = new Array("C++", "Perl", "Java");
var day = new Date("August 15, 1947");
var funct = (boy,girl)=>{ 
    // this is funcion 
    this.boy = "ram"
    this.girl= "sita"
}
funct.dada ="baba"
console.log(typeof(funct))  // this output shows funct in a function
// gender = new funct()    // now gender is object by the constructor and =new key word not by funct function
// console.log(gender)
// 2. declaration by Constructor Functions:
var fun = function sex(male,female){ //here sex is object body constructed by var fun
    this.male="ram"
    this.female="sita"
}
// sex.prototype.other=null  //- not posible to add propety
let family= new fun()
console.log(family)    // object with given propries only
// family.prototype.other=null
console.log(family)   
function addmember(named) // this function will be addded as property to the object
{
    this.memberN=named
}
family.addmember=addmember();
console.log(family) //this shows family object with new property of family
// Creating Objects in JavaScript
// There are four different ways to create objects:

// 1. Object Literals.
// 2. Constructor Functions.
// 3. ECMAScript 6 Classes.
// 4. Object.create Method.


// OBject declaration by Object literals
obj1 = {
key1 : "123" ,
key2 : "456",
key3 : Date.parse("25 january 2000")
}
//
console.log (obj1) 
// 3. ECMAScript 6 Classes.
class Objclass {
        constructor(cow,dog,spider,human,snake)
        {
            this.cow=cow
            this.dog=dog
            this.spider=spider
            this.human=human
            this.snake=snake
            this.Tmethod= function(){
                return (cow>spider||human>snake)
            }
        }
}
var prajati= new Objclass(4,4,8,2,0)
console.log( prajati) 


// 4. Object.create Method.
let oneObj = Object.create(Objclass)
with(oneObj){
    this.cow=4
    this.dog=4
    this.human=1
    this.sanke=0
    this.spider=6
}
console.log( (oneObj)) // this worth noticing in console
console.log( typeof(oneObj))
console.dir((oneObj))