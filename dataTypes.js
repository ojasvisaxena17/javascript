"use strict"; // treat all code as new javascript version
//avoid semiclons in node, react
console.log(3+3);
console.log("Ojasvi")

//we can define ant type of data by let variablename = value including boolean value
console.log(typeof null);
// null is considered  as an object in javascript 
console.log(typeof undefined);
  

//data conversion
let score = "13"
console.log(typeof score)
let valueIn = Number(score)
console.log(typeof valueIn);
let a = 10
let b = true
let c = 234.456
 let d = null
 console.log(typeof a,b,c,d); //prints only a value 

 console.log(typeof b);
 console.log(typeof c);
 console.log(typeof d);
 
console.log(Number(b))
// console.log(Boolean a);
 console.log(String(a));
console.log(Boolean(a));

a = 0
console.log(Boolean(a));

a = "erte445"
const myFunction = function(){
    console.log("Hello world")
}

 console.log(typeof a)
 console.log(Number(a)); //NaN 
 console.log(Number(d));
 //empty string converted to boolean gets false, value string gets true value.
 a = "Ojaasvi"
 console.log(Boolean(a));
 //primitive data types -
 // string , number , boolean, null, undefined, symbol, BigInt  stores in stack. Copies the data

 //non-primitive data types- stores in heap - creates reference
 //Reference (non- primitive)
//Array, Objects, Functions 

//Arrays:
const array = ["man","women","children"];
let mobj = {
    name : "ojasvi",
    age : 22,
}
myFunction()

let array2 = {
    email : "ojasvi@yahoo.com",
    name : "Shivankar"
}
let array1 = array2
console.log(array1)
console.log(array2)
array2.email = "ojasvi@gmail.com"
console.log(array2);
console.log(array1)
array1.email = " yahoo.com"
console.log(array1); //both values change array1 and array2
console.log(array2);


