 let num =7
 let num2="7"
 console.log(num!=num2) 
 console.log(num!==num2)  
 // if else condition
 let age =19;
if(age>18)
{console.log("User can play ddlc");
}
else { ("User can play mario");}
let nuM =14;
if (nuM%2===0){
    console.log("even");
}else {
    console.log("odd");
}
// falsy vlues which return false .
// false
// ""
// null
//udefined 
//0

// rest all eare truthy vlues
// 1
//-1
//"abc"
let nuM2 ;
if (nuM2){
    console.log("ttrue");
}else {
    console.log("fflasey");
}
// ternay or condition operator
//exsmle using without  ternary
let ageck=15
if(ageck>5)
{console.log("aap chai piyo")}
else
{
    console.log("beta tum doodh piyo");
}
// now with ternary
let display= ageck>5 ? "aap chai piyo ,by tenary" :" beta tum doodh piyo, by ternary" 
console .log(display)
// using And and OR operator in js
//&& 
let checkUpper="Himanshu";
let checkUpper2="vishwakarma";
checkbox = 1
if ( ((checkUpper[0]==checkUpper[0].toUpperCase()) && (checkUpper2[0]==checkUpper2[0].toUpperCase()) ) || checkbox )
{ console.log(" both are good noun ")}
else 
{console.log ("not capital case in btoh names")}

// nested if else game 
// guess a number
let input
let winningN=23
/*
while(input!==winningN)
{   
    input= +prompt("enter a number for guess two digit")
    if(input===winningN)
    { 
    console.log("you got the right answer")  
    }
    if(input<winningN)
    { console.log("your number is less than the number")}
    else 
    { console.log("your number is grater than the number")}
}*/
  // sum of first n =10 natual numberas
let natual=10
let Nsum=0
i=0
while( i<=natual) {
    Nsum= Nsum + i
    i++
}
Nsum=+Nsum
console.log(`value of i is ${i}`)
console.log("sum is "+ Nsum)