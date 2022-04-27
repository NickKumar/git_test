const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const schedule = ["Wake up", "Eat", "Learn JavaScript", "Watch Disney+"];

// log the whole array
console.log(schedule);

const phoneNumbers = [4521341111, 2345232222, 2345243333, 2346524444];

// log one entry in the array
console.log(phoneNumbers[0]);

// add a value to the end
schedule.push("Do exercises");
console.log(schedule);

// remove the value from the end
schedule.pop();
console.log(schedule);

// add a value to the beginning
schedule.unshift("Turn off alarm");
console.log(schedule);

// remove a value from the beginning
schedule.shift();
console.log(schedule);

// schedule.indexOf("Eat"); return the index number of the matching string
console.log(schedule.indexOf("Eat"));

// create an empty array
const mark_3 = [];

// assign values to spot within an array
mark_3[0] = "Gipsy Danger";
mark_3[1] = "Matador Fury";
mark_3[2] = "Shaolin Rogue";
mark_3[3] = "Vulcan Specter";
mark_3[4] = "Chrome Brutus";

console.log(mark_3);
document.getElementById("demo").innerHTML = mark_3;

// how to check if it is an Array
console.log(Array.isArray(mark_3));

console.log(mark_3 instanceof Array);

console.log(ages);

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(ages.toString());

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log(ages.join("*"));

// change the first value to 42
ages[0] = 42;
console.log(ages);

// length
console.log(ages.length);

// using length to calculate the last spot in the array
ages[ages.length] = 42;
console.log(ages);

// the concat() method merges arrays
const myGirls = ["Agrias", "Ovelia", "Balmafula"];
const myBoys = ["Orlandu", "Ramza", "Delita"];
const myGenerics = ["Hampsten", "Papaya"];
const myChildren = myGirls.concat(myBoys, myGenerics);

console.log(myChildren);

const myTeam = myChildren.concat("Meliadoul");
console.log(myTeam);

// The splice() method can be used to add new items to an array. This is a method to injest values into any position in the array.

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// The splice() method adds new elements to an array, and returns an array with the deleted elements (if any)

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: " + fruit);
let removed = fruit.splice(2, 2, "Lemon", "Kiwi");
console.log("New Array: " + fruit);
console.log("Removed Items: " + removed);

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array

const stuffs = ["Banana", "Orange", "Apple", "Mango"];
console.log(stuffs);
stuffs.splice(0, 1);
console.log(stuffs);

// The slice() method slices out a piece of an array into a new array.
// The method then selects elements from the start argument, and up to (but not including) the end argument.

const junks = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(junks);
const citrus = junks.slice(1, 3);
console.log(citrus);

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

// The sort() method sorts an array alphabetically:
const alpha = ["Banana", "Orange", "Apple", "Mango"];
alpha.sort();
console.log(alpha);

// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:
alpha.sort();
alpha.reverse();
console.log(alpha);
