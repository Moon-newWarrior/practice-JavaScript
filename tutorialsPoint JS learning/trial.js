// // nested destructuring 
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]

// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);\

// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);