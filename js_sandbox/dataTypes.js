console.log('###################################');
console.log('Data Types');
console.log('###################################');

// Two Main data types in JS

// Primitive Types:
// - Stored directly in the location the variable accesses
// - Stored in the stack

// String
// Number
// Boolean
// Null
// Undefined
// Symbol (ES6)

// _____________________________________________________________________________

// Reference Types (AKA Objects)
// - Accessed by reference
// - Objects that are stored on the heap
// - A pointer to a location in memory

// Array
// Object Literal
// Function
// Date
// Anything else...

// JS is a dyamnically typed language:

// - data types are associated with actual values and not the variables themselves.
// - The same variable can hold multiple data types.
// - No need to specify type.
// - Most other languages are statically typed (Java, C#, C++, etc)
// - There are supersets of JS and addons to allow static typing (TypeScript, Flow)

// _____________________________________________________________________________

// Examples:

// _____________________________________________________________________________

// Primitives

// String
const name3 = 'John Doe';
console.log(typeof name3); // string

// Number
const age = 30;
console.log(typeof age); // number

// Boolean
const hasKids = true;
console.log(typeof hasKids); // boolean

// Null
const car = null;
console.log(typeof car); // object

// ***NOTE: null is NOT an object, this is sort of a bug of JS

// Undefined

let test;
console.log(typeof test); // undefined

// Symbol

const sym = Symbol();
console.log(typeof sym); // symbol

// _____________________________________________________________________________

// Reference

// Array

const hobbies = ['movies', 'music'];
console.log(typeof hobbies); // object

// Object Literal

const address = {
  city: 'Boston',
  state: 'MA'
};

console.log(typeof address); // object

// Date

const today = new Date();
console.log(today); // Mon Jul 27 2020 17:23:47 GMT-0400 (Eastern Daylight Time)
console.log(typeof today); // object
