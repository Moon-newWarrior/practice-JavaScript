//here we will create objects under array
const users=[
{userId:0o1,Name:"abc",gender:"male"},
{userId:0o2,Name:"abcd",gender:"gay"},
{userId:0o3,Name:"abce",gender:"male"},
{userId:0o4,Name:"abcf",gender:"male"},
{userId:0o5,Name:"abcg",gender:"female"},
{userId:0o6,Name:"abch",gender:"female"},
{userId:0o7,Name:"abci",gender:"female"},
]
for (let user of users){
    console.log(user.Name)
}
//nested destructuring
const[{userId:userNo,Name},,,,{gender:sex},,{Name:profile}]=users;
console.log(userNo)
console.log(Name)
console.log(sex)
console.log(profile)