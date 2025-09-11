array = [0,1,2,3,4,5]
// console.log(array[3]);

// console.log(array.length);
// console.log(array.pop());
// console.log(array.push(6));
// console.log(array.indexOf(9));
// console.log(array.shift());
// console.log(array.unshift(5));
// console.log(array.includes(10));
 const array1 = array.join(); //adds elements of aray into array1 as string.
 console.log(array);
 console.log(array1);
 
  console.log(typeof array1);
 console.log(typeof array);
  

//  const var1 = array.slice(0,4); //doesnt include the range , the operation doesnt manipulate the original array
//  console.log(var1);
//  console.log(array);

//  const var2 = array.splice(0,2); //includes the range, the operation manipulates the original array.
//  console.log(var2);
//  console.log(array);
 
const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)
// console.log(typeof concatAll);

// //  console.log(concatAll[0]);
 
//  const Array5 =[...Array1,...Array2]
//  console.log(Array5);
 
//  //push adds on existing array and concat adds on different array.


 //is,from and of methods for Array:
 console.log(Array.isArray(Array1));
 console.log(Array.from("5,7,6,8,6"));
 console.log(Array.of(1,2));
 