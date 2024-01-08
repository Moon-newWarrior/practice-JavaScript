// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//task is to intialize the vlues based on the values
const obj ={
    [key1]:value1,
    [key2]:value2
}
console.log(obj)
const obj2 ={}

obj2[key1]= value2
obj2[key2]= value1
console.log(obj2)
