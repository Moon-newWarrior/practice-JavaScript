// declaring array as an object in js
fruits=[];
console.log(typeof fruits)
console.log(Array.isArray(fruits))
fruits={};
console.log(typeof fruits)
console.log(Array.isArray(fruits))
// array push pop function for adding and removing elements from last indexes 
myarry=["himanshu","rohit","pawan"]
myarry.push("dipesh","chintu")
console.log(myarry)
blackman=myarry.pop(myarry[4])
console.log(blackman+" "+ myarry)
//array shift unshift from front of a array
myarry.unshift("gaurav","mohit")
console.log(myarry)
myarry.shift()
console.log(myarry)
//array is muteable in javascript
//how to clone array in javascript while the arrays are refrence type
//way s 
array1=[2,4,6,8]
array2=[2,4,6,8]// arrayy 2 is clone of 1 
array3=array1.slice(0)//array3 is clone of 1
array4=[].concat(array1)//array4 is clone of 1
array5=[...array1]//array5 is clone of 1 using spread operator
console.log("copy5 using spread operator",array5)
console.log(array5)
array6=["dipak",...array1,"anish","atal",...array5]
console.log(array6)

  