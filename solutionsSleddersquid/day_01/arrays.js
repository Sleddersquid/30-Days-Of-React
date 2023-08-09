// let and const are block scope
// var is a function scope

// NEW SECTION: Arrays
const arr1 = Array();
const arr2 = new Array();
// Using squarebrackets. This is the recommended way to create an empty list
const arr3 = [1, 2, 3, 4];

// NEW SECTION: Creating arrays with different conten inside
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits1 = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits1
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits1:', fruits1)
console.log('Number of fruits1:', fruits1.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// NEW SECTION: How to create an array with values
// Arrays kan also have different items, data types and even arrays
const manytypesArray = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
  ]; // arr containing different data types


console.log(manytypesArray[3]); // { country: 'Finland', city: 'Helsinki' }
console.log(manytypesArray[3]["country"]); // Finland


// NEW SECTION: Accessing array items using index
// const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0] // we are accessing the first item using its index
console.log(firstFruit) // banana

secondFruit = fruits1[1]
console.log(secondFruit) // orange

let lastFruit = fruits1[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits1.length - 1
lastFruit = fruits1[lastIndex]
console.log(lastFruit) // lemon

// List of web technologies
const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] 

console.log(webTechs2); // All the items
console.log(webTechs2.length); // The length of the array webTechs2
console.log(webTechs[0]) //  -> HTML
console.log(webTechs[6]) //  -> MongoDB


// NEW SECTION: Modifing array elements
const numbers2 = [1, 2, 3, 4, 5];
numbers2[0] = 10; // Replacing the first element with 10
numbers2[numbers2.length - 1] = 11; // Replacing the last element with 11

// NEW SECTION: Methods to maniplualte arrays
const arr = Array(); // creates an empty array
console.log(arr); // []

const eightEmptyValues = Array(8); // creates an array with 8 empty values
console.log(eightEmptyValues); // [ <8 empty items> ]

// NEW SECTION: Creating static values with fill
// Fill can be used to fill an empty array with a char/string/number
const eightXvalues = Array(10).fill("X"); // Array with 10 elements
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X', 'X', 'X']

const eight0Values = Array(8).fill(0);
console.log(eight0Values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4Values = Array(4).fill(4);
console.log(four4Values);

// NEW SECTION: Concatenating array using concat
// concat: To concatenate two arrays. Function used on the array you want to concat on
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);

const fruits2 = ["Banana", "Orange", "Mango", "Lemon"];
const vegetables2 = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const fruitsAndVegetables = fruits2.concat(vegetables2);

console.log(fruitsAndVegetables);

// NEW SECTION: Getting length of an array
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.length); // Gives 5. array numbers3 has a length of 5

// NEW SECTION: Getting index of an element in an array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.indexOf(5)); // Returns 4
console.log(numbers4.indexOf(0)); // Returns -1, because element isn't present in array
console.log(numbers4.indexOf(1)); // Returns 0
console.log(numbers4.indexOf(6)); // Returns -1

