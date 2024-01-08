//using for loop in array
//COPY ARRAY WAY 1
var charset=[..."abcdefghijklmnopqrstuvwxyz"]
console.log(charset)
let charsetU=[]
for(let i=0;i<=(charset.length-1);i++){
    charsetU.push(charset[i].toUpperCase())
    console.log(charsetU)
}
//pack my box with five dozen liquor jugs
// safe practice of using const in array

const safe =["baba","kaba","jaba"]
console.log(safe)
safe.pop()
console.log(safe)
safe[0]="bhiya";
console.log(safe) 
//using the samr thing to copy IN WHILE LOOP
//COPY ARRAY WAY 2
/* failed: const charset2=[]
let i=0
while(i<charset.lenght){
    charset2.push(charset[i].toUpperCase());
    i++;
}
console.log(charset2)   */

const fruits = ["apple", "mango", "grapes" ,"fruit4", "fruit5"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);
//USING FOR OF FOR COPY ARRAY WAY 3
const fruit3=[]
for(let fruit of fruits)
{
    fruit3.push(fruit)
}
console.log(fruit3);
//USING OF FOR IN THE ARRAY COPY WAY 4
// THIS IS USED FOR INDEXING
const fruit4=[]
for(let i in fruits)
{
    fruit4.unshift(fruit3[i].toLowerCase())
}
console.log(fruit4);