// tasks to demonstrate folowing
// object [key]: value
// object.key(objectName)
// for in loop 
// for of loop
// spred operator in object
// object destruction on varaibles 
let myobj = { 
    k1 : "david" ,
    K2 :"kohli" ,
    K3 : "rahul"
}
myobj [ "key1" ] = "Himanshu "
myobj [ "key2" ] = "beta"
myobj [ "key3" ] = "gamma"
// console.log(myobj)

// console.log("\n \n", Object.keys(myobj))
// console.log("\n \n", Array.isArray(Object.keys(myobj)))
// for( ky in myobj)
// {
//     console.log(ky)
// }
myobj={...myobj}
// for( ky in myobj)
// {
//     console.log(ky)
// }

let {jj,pp,kk,...rest}=myobj
console.log(rest,typeof(rest))