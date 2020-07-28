console.log('###################################');
console.log('Block Scope w/ let & const');
console.log('###################################');

// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function test1() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test1(); // Function Scope:  4 5 6

// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Block Scope: ', a, b, c);
// }

for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

// function runs --> Global Scope:  1 2 3

// if block runs --> Global Scope:  4 2 3 --> block var a overwrites global var a

// For loop runs --> Global Scope:  10 2 3 --> value of var a is iterated and changed globally

// ***var opens you up for security risks and confusion, avoid

// Let & Const have block level scopes while Var has a function scope.
