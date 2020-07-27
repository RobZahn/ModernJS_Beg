console.log('###################################');
console.log('Type Conversion');
console.log('###################################');

// #########
// String():
// #########

console.log('#################');

let val;

// Number to string:

val = 5;

// Output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.length); // undefined --> .length only works on strings

// We can wrap a number in the String() function to change it into a string:

val = String(5);

// Output
console.log(val); // 5
console.log(typeof val); // string
console.log(val.length); // 1

// We can also wrap an expression in the String() function. The evaluated
// expression will be returned as a string.

val = String(4 + 4);

// Output
console.log(val); // 8
console.log(typeof val); // string
console.log(val.length); // 1

// _____________________________________________________________________________

// Boolean to string:

val = String(true);

// Output
console.log(val); // true
console.log(typeof val); // string
console.log(val.length); // 4

// _____________________________________________________________________________

// Date to string:

val = String(new Date());

// Output
console.log(val); // Mon Jul 27 2020 18:26:48 GMT-0400 (Eastern Daylight Time)
console.log(typeof val); // string
console.log(val.length); // 57

// _____________________________________________________________________________

// Array to string:

val = String([1, 2, 3, 4]);

// Output
console.log(val); // 1,2,3,4
console.log(typeof val); // string
console.log(val.length); // 7

// _____________________________________________________________________________

// #########
// String():
// #########

console.log('#################');

// _____________________________________________________________________________

val = (5).toString();

// Output
console.log(val); // 5
console.log(typeof val); // string
console.log(val.length); // 1

// ***NOTE: You can't call a method directly on a number in JS! The num can
// be assigned to a variable or wrapped in parens or a space can be added after
// it like this: 5 .toString.
// Attempting to call a method directly on the num will throw an error.

val = true.toString();

// Output
console.log(val); // true
console.log(typeof val); // string
console.log(val.length); // 4

// _____________________________________________________________________________

// #########
// Number():
// #########

console.log('#################');

val = Number('5');

// Output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.toFixed(2)); // 5.00

// ***Note toFixed() is a Number.Prototype method that forces a specified amount
// of decimals on the end of a num.

val = Number(true);

// Output
console.log(val); // 1
console.log(typeof val); // number
console.log(val.toFixed(2)); // 1.00

val = Number(false);

// Output
console.log(val); // 0
console.log(typeof val); // number
console.log(val.toFixed(2)); // 0.00

val = Number(null);

// Output
console.log(val); // 1
console.log(typeof val); // number
console.log(val.toFixed(2)); // 1.00

// ***Note: True = 1, False and null = 0

val = Number('hello');

// Output
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed(2)); // NaN

val = Number([1, 2, 3]);

// Output
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed(2)); // NaN

// ***NOTE: NaN happens when we try to parse a value as a number but can't.

// _____________________________________________________________________________

// #########
// parseInt():
// #########

console.log('#################');

val = parseInt('100');

// Output
console.log(val); // 100
console.log(typeof val); // number

val = parseInt('100.30');

// Output
console.log(val); // 100
console.log(typeof val); // number

// ***NOTE: parseInt() will not respect decimals! For decimal numbers we use
// parseFloat()

val = parseFloat('100.30');

// Output
console.log(val); // 100.3 --> drops 0 by default. Use toFixed() to get around this.
console.log(typeof val); // number
