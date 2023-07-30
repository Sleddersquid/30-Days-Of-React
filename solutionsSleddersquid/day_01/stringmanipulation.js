// NEW SECTION: Creating an array using split
let jsString = "JavaScript";
// Split separates a string into an array
const charsInJavascript = jsString.split(""); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
console.log(charsInJavascript);

// split kan also be used to split when a spesific character is present in the string
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// This splits the string when there is a semicolon and a space.
const companies = companiesString.split(', ');
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

// Split using only space. Generates an array with words
let text = "I love working with JavaScript, CSS and HTML. But React is very interesting";
const words = text.split(" ");
console.log(words);

// 