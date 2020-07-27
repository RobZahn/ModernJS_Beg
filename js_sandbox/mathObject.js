console.log('###################################');
console.log('Math Object');
console.log('###################################');

const num1New = 100;
const num2New = 50;
let valNew;

// Simple math with numbers

valNew = num1New + num2New;
console.log(valNew); // 150

valNew = num1New * num2New;
console.log(valNew); // 5000

valNew = num1New - num2New;
console.log(valNew); // 50

valNew = num1New / num2New;
console.log(valNew); // 2

valNew = num1New % num2New;
console.log(valNew); // 0

// ###########
// Math Object
// ###########

valNew = Math.PI;
console.log(valNew); // 3.141592653589793

valNew = Math.round(2.8); // rounds up by default
console.log(valNew); // 3

valNew = Math.ceil(2.8); // ceiling rounds up
console.log(valNew); // 3

valNew = Math.floor(2.8); // floor rounds down
console.log(valNew); // 2

valNew = Math.sqrt(64); // Finds square root
console.log(valNew); // 8

valNew = Math.abs(-3); // Returns absolute value of a number
console.log(valNew); // 3

valNew = Math.pow(8, 2); // Finds value of a number to specified power
console.log(valNew); // 64

valNew = Math.min(33, 5, 1600, 200, -2); // Finds smallest num in a list of nums
console.log(valNew); // -2

valNew = Math.max(33, 5, 1600, 200); // Finds biggest num in a list of nums
console.log(valNew); // 1600

valNew = Math.random(); // Gives random decimal number
console.log(valNew); // 0.6246488190550401

valNew = Math.random() * 20 + 1; // Gives random decimal number from 1 - 20
console.log(valNew); // 13.885881768816866

valNew = Math.floor(Math.random() * 20 + 1); // Removes decimals with Math.floor()
console.log(valNew); // 10
