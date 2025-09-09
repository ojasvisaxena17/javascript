let name = " ojasvi "
let age = 25
console.log('My name is ${name} and my age is ${age}')

const value = new String("javascript")

//string is an object. length with index starting from 0.

console.log(value[0]);

console.log(value.__proto__); //has lot of methods in object.
//.length

console.log(value.toLowerCase());
console.log(value.charAt(4));

console.log(value.substring(0,4));

console.log(value.indexOf('s'));

console.log(value.substring(-9,4)); //starts from 0
console.log(value.slice(-8,4)); 
console.log(value.trim()); //removes starting and ending space

