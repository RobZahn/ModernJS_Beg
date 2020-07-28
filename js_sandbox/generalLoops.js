console.log('###################################');
console.log('General Loops');
console.log('###################################');

// For Loop

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }
  console.log(`Number ${i}`);
}

// Number 0
// Number 1
// 2 is my favorite number
// Number 3
// Number 4
// Number 5
// Number 6
// Number 7
// Number 8
// Number 9

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Stop the loop');
    break;
  }
  console.log(`Number ${i}`);
}

// Number 1
// Number 2
// Number 3
// Number 4
// Stop the loop

// _____________________________________________________________________________

// While loop

let i = 0;

while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// Do while

let j = 0;

do {
  console.log('Number ' + j);
  j++;
} while (i < 10);

// Do while loops are different from while loops in that the "do" portion of code
// will run no matter what, even if the while condition isn't met.
// Example:

let k = 100;

do {
  console.log('Number ' + k);
  k++;
} while (i < 10);

// Number 100 --> prints even though the condition is never met

// _____________________________________________________________________________

// Looping through arrays

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for loop

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// forEach()

cars.forEach(function (car) {
  console.log(car);
});

// map()

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' }
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids); // [1, 2, 3]

// For In

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for (let x in user) {
  console.log(x);
  // firstName
  // lastName
  // age
  console.log(`${x} : ${user[x]}`);
}

// firstName : John
// lastName : Doe
// age : 40
