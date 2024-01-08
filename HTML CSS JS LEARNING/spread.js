//spread operator in object
const obj1={
    key1:"value1",
    key2:"value2"

};
const obj2={
    key1:"valueunique",
    key3: "vaalue3",
    key4: "value4",
};
//const newObject={...obj2,...obj1,key5:"value5"}
//newObject={...["item1","item2","item3","item4"]}
newObject={..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObject)
// object destructuring
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  let{bandName: bandN ,famousSong :song ,...rest}=band;
  console.log(bandN,"  ",song);
  console.log(rest);
  