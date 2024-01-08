// array destructuring 
//aplication of array destructuring
let one,two,three
one=11111111
two=2222222
three=333333
let arry=[1,2,3,one,two,three,"this is arry"]
let [x,y,z,,,...rest]=arry
console.log(x)
console.log(y)
console.log(z)
console.log(rest)