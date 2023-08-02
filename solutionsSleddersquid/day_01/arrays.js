// let and const are block scope
// var is a function scope

// NEW SECTION: Arrays
const arr1 = Array();
const arr2 = new Array();
// Using squarebrackets. This is the recommended way to create an empty list
const arr3 = [1, 2, 3, 4];

// NEW SECTION: Creating arrays with different conten inside
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

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
// const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index
console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
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

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);