console.log('###################################');
console.log('Variables');
console.log('###################################');

// VAR - essentially deprecated

var name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

// Init var

var greeting1;
console.log(greeting1); // undefined
greeting1 = 'hello';
console.log(greeting1);

// vars can include letters, numbers, _, $
// Can never start with a number
// var 1name = 'John' --> Uncaught SyntaxError: Invalid or unexpected token

// Multi word variables - camelCase is convention for JS for normal variables

var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Snake case
var FirstName = 'Tom'; // Pascal case

// LET
let name1;
name1 = 'John Smith';
console.log(name1);
name1 = 'Bruce Willis';
console.log(name1);

// CONST - const cannot be reassigned
const name2 = 'John Smith';
console.log(name2);
// name2 = 'Bruce Willis' --> Uncaught TypeError: Assignment to constant variable.

// Const has to be assigned a variable. It cannot be initialized without one.

// const newGreeting; --> Uncaught SyntaxError: Missing initializer in const declaration

// When const is used with primitive data types like arrays and objects, the data within those data structures can be changed but the actual data structure itself cannot be reassigned.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
