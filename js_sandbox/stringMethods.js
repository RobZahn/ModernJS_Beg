console.log('###################################');
console.log('String Methods');
console.log('###################################');

const firstName1 = 'William';
const lastName1 = 'Johnson';
const age1 = 30;

val = firstName1 + lastName1;
console.log(val); // WilliamJohnson

// Concatenation

val = firstName1 + ' ' + lastName1;
console.log(val); // William Johnson

// Append

val = 'Rob ';
val += 'Zahn';
console.log(val); // Rob Zahn

val = 'Hello, my name is ' + firstName1 + ' and I am ' + age1 + '.';
console.log(val); // Hello, my name is William and I am 30.

// Escaping

val = "That's awesome, I can't wait";
console.log(val); // That's awesome, I can't wait

// Length

val = firstName1.length;
console.log(val); // 7

// concat()

val = firstName1.concat(' ', lastName1); // Takes two strings as args and concats them.
console.log(val); // William Johnson

// toUpperCase()

val = firstName1.toUpperCase();
console.log(val); // WILLIAM

// toLowerCase()

val = firstName1.toLowerCase();
console.log(val); // william

// indexOf(), lastIndexOf()

val = firstName1.indexOf('l'); // Returns first char that matches arg
console.log(val); // 2

val = firstName1.lastIndexOf('l'); // Returns last char that matches arg
console.log(val); // 3

// ***NOTE: indexOf() will return -1 if there is no such char in the string.

// charAt()

val = firstName1.charAt('2');
console.log(val); // l

// Get last char of a string

val = firstName1.charAt(firstName1.length - 1);
console.log(val); // m

// substring()

val = firstName1.substring(0, 4); // Returns a substring from first arg to second non-inclusive
console.log(val); // Will

// slice()
val = firstName1.slice(0, 4);
console.log(val); // Will

val = firstName1.slice(-3); // Returns last 3 chars in the string
console.log(val); // iam

// split()

const str = 'Hello my name is Rob.';
val = str.split(' ');
console.log(val); // ["Hello", "my", "name", "is", "Rob."]

// replace()

val = str.replace('Rob', 'Jack');
console.log(val); // Hello my name is Jack.

// includes()
val = str.includes('Hello');
console.log(val); // true
