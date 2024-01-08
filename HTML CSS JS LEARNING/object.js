//object in js are similar to the array
//object doesnt has indexs thus they have key which are in form of string by default
//obejt has syntax / structure of  key value
const person ={
    name:"himanshu vishwakarma"
    ,
    Age:22
    ,
    "daily hobies":["run","killing","sleep"]
    ,
    dob: [0o5,0o1,2000]
    ,
    mobile: 8989789015
}
//adding some few key value pair to object
person["gender"]='M';
console.log(person)
// diffrence between the dot and the braket notation with the object 
const key="email";
let email="200himanshuvk@gmail.com"
console.log(person["dob"])
console.log(person.dob)
console.log("ITERATING OBJECT ITERATING USING FOR LOOP")
// ITERATING OBJECT
// ITERATING USING FOR LOOP
//UDING OBJECT.KEY
// for in
for (let ky in person){
    console.log(`${ky} : ${person[ky]}`);
}
console.log("In-FOR LOOP ended")
console.log((Object.keys(person)));
console.log(typeof(Object.keys(person)));
console.log(Array.isArray(Object.keys(person)));

//for of
console.log("OF-FOR LOOP STARTS")
for(let ky of Object.keys(person)){
    console.log(ky ,"   ", person[ky]);
}
