console.log("hello world");
console.log(`hello world with backticks`)
// variable creation exercise 
var firstname="himanshu";
console.log (firstname);
firstname="Priyanshu";
console.log (firstname);
secondname="yash";
console.log(secondname);
"Use Strict";
thirdname="anshu";
console.log(thirdname);

//arithematc operations on the variable var 
var number=8;
console.log(number +10 );
console.log(number -10)
console.log(number*10)
console.log(number**3)
console.log(number**2)
console.log(number ** 3)
console.log(number**0.5)
//declaraion of var/variable using let
let name1="sandeep"
console.log(name1)
name1="pradeep"
console.log(name1 + 22/7) 
const pi=3.14;
//string 
let mystring="himanshu";
console.log(mystring[0])
//printing length of string
console .log(mystring.length);
//printing the last index of any given string
console.log(mystring[mystring.length-1]);
// string operation functions 
//trim the whitespaces 
let demostr="      my   name   is khan  "
console.log(demostr+" = this is my demo string with lenght of : "+demostr.length)
let trimedStr=demostr.trim()
console.log("this is my new string with trim function "+ trimedStr)
//coverting the string into uppercase and lowercaase
let namestr="kedarnath"
console.log(namestr)
console.log((namestr.toUpperCase()))
console.log(namestr.toLowerCase())
//slicing the string into part into new struing according to new indexes
console.log("taking kedarnath as string")
let string1 =namestr.slice(0,4)
let string2 =namestr.slice(5,namestr.length)
console.log(string1)
console.log(string2)
//use of typeof to deterrmining the type of the variable
let age= 12
let Age=22433333333333333333n
decision=true
console.log(typeof age)
console.log(typeof Age)
console.log(typeof decision)
//type casting of variables in javascript
age =age+""
console.log(typeof age)
console.log(typeof (""+Age))
let xyz= +"25"
xyz= Number(xyz)
console.log(typeof(xyz))
let integernum= 12344
integernum=String(integernum)
console.log(typeof integernum)
//string concatenation
let String1="Himanshu"
console.log(String1)
let String2="Vishwakarma"
console.log(String2)
let fullString= String1 +" "+ String2
console.log(fullString)
let S1= "34"
let S2= "36"
console.log((S3=S1+S2))
console.log((S3=(+S1)+(+S2)))
//templete string
// if we want to print any sentences having multiple variable values here contemprerly we use it in method of using sum in this metyhod we use $sysmbol to add variables of in {} braces
let aboutme= `my name is ${firstname} i want to go to ${namestr} my current age is ${S2} but two years back my age was ${S1} but the expense to go ${namestr} is much high equvivalent to ${S3} thousand`
console.log(aboutme)

