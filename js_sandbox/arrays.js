console.log('###################################');
console.log('Array Methods');
console.log('###################################');

// Create arrays

const nums = [43, 56, 33, 23, 44, 36, 5];
const nums2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// Get array length

val = numbers.length;
console.log(nums);
console.log(val);

// Check to see if something is an array

val = Array.isArray(nums); // true
val = Array.isArray('hello'); // false

// Get single value

val = nums[3];
console.log(val); // 23

// Insert into array

nums[2] = 100;
console.log(nums); // [43, 56, 100, 23, 44, 36, 5]

// Find index of value

val = nums.indexOf(36);
console.log(val); // 5

// _____________________________________________________________________________

//###############
// Array Mutation
//###############

// push() - adds to the end

nums.push(250);
console.log(nums); // [43, 56, 100, 23, 44, 36, 5, 250]

// unshift() - adds to the start

nums.unshift(120);
console.log(nums); // [120, 43, 56, 100, 23, 44, 36, 5, 250]

// pop() - removes from end and returns that value

let popped = nums.pop();
console.log(nums); // [120, 43, 56, 100, 23, 44, 36, 5]
console.log(popped); // 250

// shift() - removes from start and returns that value

let shifted = nums.shift();
console.log(nums); // [43, 56, 100, 23, 44, 36, 5]
console.log(shifted); // 120

// splice() - removes elements in an array, takes a start and end idx as args

nums.splice(1, 1);
console.log(nums); // [43, 100, 23, 44, 36, 5]

nums.splice(1, 3);
console.log(nums); // [43, 36, 5]

// reverse()

nums.reverse();
console.log(nums); // [5, 36, 43]

// Concat arrays

val = nums.concat(nums2);
console.log(val); // [5, 36, 43, 22, 45, 33, 76, 54]

// Sorting arrays

val = fruit.sort();
console.log(val); // ["apple", "banana", "orange", "pear"]

// for numbers:

val = nums.sort(function (x, y) {
  return x - y;
});

console.log(nums); // [5, 36, 43]

// Find

function under50(num) {
  return num < 50;
}

// returns first num that matches criteria of the testing function

val = nums2.find(under50);
console.log(val); // 22
