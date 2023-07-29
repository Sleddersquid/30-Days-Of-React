const array = [1, 2, 3, 4, 5]

let sum = 0
array.forEach((n) => {
    sum +=n;
});

console.log(`Sum of array [${array}] is ` + sum);

// It companies
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

itCompanies.forEach((element) => {
    console.log(element);
})