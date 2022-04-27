// For of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// Given the collection cats, get the first item in the collection.
// Assign it to the variable cat and then run the code between the curly brackets {}.
// Get the next item, and repeat (2) until you've reached the end of the collection.
//
//
// You can use map() to do something to each item in a collection and create a new collection containing the changed items
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);
//Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase:
//
//
//You can use filter() to test each item in a collection, and create a new collection containing only items that match:

function lCat(cat) {
  return cat.startsWith("L");
}
const filtered = cats.filter(lCat);

console.log(filtered);

// For loop
// for (initializer; condition; final - expression) {
//   // code to run
// }

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

//forEach
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(output);

function output(item, index, array) {
  console.log(index, item);
}

numbers.forEach(function (item, index, array) {
  console.log(index, item);
  console.log(array);
});

// the names of the parameters are the things in the array.
