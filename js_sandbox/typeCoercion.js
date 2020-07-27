console.log('###################################');
console.log('Type Coercion');
console.log('###################################');

// JS will automatically attempt to coerce types.

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // 11
console.log(typeof sum); // number

const val3 = '5';
const val4 = 6;
const sum2 = val3 + val4;

console.log(sum2); // 56
console.log(typeof sum2); // string

// In the code above, JS changed 6 to a String and concatenated it with '5'.
