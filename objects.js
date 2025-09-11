//singleton 

//object literals
// obj = {
//     name : "Vscode",
//     work : "Javascript",
//     date : 10,
//     aim : ["learn", "javascript"],
//     "work status": "learning"
// }

// //for refering :
// console.log(obj.name);
// console.log(obj.work);
// console.log(obj["name"]);
// console.log(obj["work status"]);
// console.log(obj);
// console.log(obj.aim);

// console.log(obj.aim[0]);

//make use of symbol() to define a symbol

// const sym = Symbol("mysym")
// console.log(sym);
// console.log(typeof sym);


// //to use sym as a key in object:

// obj = {
//     name : "Vscode",
//     work : "Javascript",
//     date : 10,
//     sym : ["arrow", "comma"],
//     aim : ["learn", "javascript"],
//     "work status": "learning"
// }

// console.log(obj.sym);
// console.log(obj.sym[0]);
// console.log(typeof obj.sym);

// //to take sym as a symbol itself in obj object we need to put sym in square bracket:

// obj = {
//     name : "Vscode",
//     work : "Javascript",
//     date : 10,
//     [sym] : ["arrow", "comma"],
//     aim : ["learn", "javascript"],
//     "work status": "learning"
// }

// console.log(obj);

// obj.greeting = function(){
//     console.log("Hello js user");
    
// }
// console.log(obj.greeting()); //calls and prints funtion()

// obj.greetingtwo = function()
// {
//     console.log(`my aim is to ${obj.aim[0]}`);
//     console.log(`my aim is to ${this.aim[0]}`);
    
    
// }
// console.log(obj.greetingtwo());

// //in javascript , keys for objects are automaticatlly considered as string.

//  check = {
//  1 : "one",
//  2 : "two"
// }
// console.log(check);

// //nested objects:
// const user = {
//     email : "some@gmail.com",
//     username : {
//         firstname : "ojasvi",
//         secondname : "saxena"
//     }
// }
// console.log(user.username.firstname);
  
// people = {
//     1 : "small",
//     2 : "big",
//     3 : "medium"
// }

// animals = {
//     4: "lion",
//     5: "pig"
// }

// children = {people,animals}

// console.log(children);
 
// const obj = Object.assign({},people, animals, children )

// console.log(obj);
//  console.log({...people,...animals}); //spread
 

//  //Array od objects:
//   console.log(Object.keys(people));
//   console.log(Object.values(people));
  
  
const value = {
 course : "Javascript",
 name : "Ojasvi"    
  }

  //value.course , value.name - fetch values from value objecyt

  const {name} = value // another wway to fetch a respective value from value object
 const {course} = value 

 console.log(name);

 const {name : n} = value // naming name key with different name.
 console.log(n);
 