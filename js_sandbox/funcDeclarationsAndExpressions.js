console.log('###################################');
console.log('Function Declarations and Expressions');
console.log('###################################');

// Function Declarations

function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}.`;
}

console.log(greet('John', 'Smith')); // Hello John Smith.

// with default parameters:

function greet1(firstName = 'John', lastName = 'Doe') {
  return `Hello ${firstName} ${lastName}.`;
}

console.log(greet1()); // Hello John Doe.

// _____________________________________________________________________________

// Function Expressions

const square = function (x) {
  return x * x;
};

console.log(square(8)); // 64

// _____________________________________________________________________________

// Immediately Invokable Function Expressions - IIFE

// Functions that run at the time of definition. They are anonymous functions wrapped
// inside parens.

(function () {
  console.log('IIFE ran');
})();

(function (name) {
  console.log(`Hello ${name}`);
})('Brad');

// _____________________________________________________________________________

// Property Methods

const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.add(); // Add todo...
todo.edit(22); // Edit todo 22
