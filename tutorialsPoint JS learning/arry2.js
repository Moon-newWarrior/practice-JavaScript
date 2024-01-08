//tasks:
// for/while loop in array for new array creation
// const array then edit that
// for of loop in array aplication
// for in loop in arrry aplication
// for each loop demo example

const A1 =[..."122222222235912345567890"]
// console.log(A1.length)
// // console.log(A1)
// A1[5]='45';
// console.log(A1)
// var lengthX=A1.push(..."himanshu")
// console.log(A1.length==lengthX)
// console.log(A1)
// var i =0;
// let A2 =[]
// for ( ;i<A1.length;i++){
//     A2[i]=A1[i]
//     console.log(A2[i],"\n")
// }
// console.log(A2)
// let A3=[]
// while (i<A1.length)
// {   
    
//     A3[i] = A1[i]
//     console.log(A3[i])
//     i++
    
// }
// console.log(A3)
//for of loop
// for ( let indx of A1)
// {
//     console.log(indx,"of means loop itration willbe on values of array")
// }
//printing table of 1 array by using"for of" loop-- this failed not succcesful
// let Atable=[..."1111111111"]
// for (let i=0;i<11;i++)
// {
//     for (let itratn of Atable)
//     {
        
//         itratn *= i
//         Atable[i]=itratn
//         console.log(itratn)
//     }
    
// }
// console.log(Atable)

// for in loop demo
// let i=1
// for (let indx in A1 ){
//     A1[indx] = i
//     i++
//     console.log(A1[indx],"in means each loop itration willbe on values of array")
// }
// foreach demo

A1.forEach((index,value)=>{A1.push(index*value)})
console.log(A1)

