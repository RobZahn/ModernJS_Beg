console.log('###################################');
console.log('Comparison Operators');
console.log('###################################');

const id = 100;

// Equal to

if (id === 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not equal to

if (id !== 101) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Checking whether or not a variable is defined

if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Greater than / less than

if (id > 200) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// If else

const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// _____________________________________________________________________________

// Logical Operators

const name = 'Steve';
const age2 = '20';

if (age2 > 0 && age < 12) {
  console.log(`${name} is a child.`);
} else if (age2 >= 13 && age2 <= 19) {
  console.log(`${name} is a teenager.`);
} else {
  console.log(`${name} is an adult.`);
}

if (age2 < 16 || age > 65) {
  console.log(`${name} can not run in race.`);
} else {
  console.log(`${name} is registered for the race.`);
}

// Ternary

console.log(id === 100 ? 'Correct' : 'Incorrect');
