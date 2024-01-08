const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
const student= {userId: 3,firstName: 'babar', gender: 'male', phone:896098081 ,parent:"doctor",lang:'ENG'}
const [{firstName: user1firstName, userId},{userId:udd} , {gender: user3gender}] = users;

// console.log(user1firstName);
// console.log(userId,udd);
// console.log(user3gender);
let{ [userId]:kk,gender:ss,phone:no,...rest}=student
console.log(kk)
console.log(ss)
console.log(no)
console.log(rest)