console.log('###################################');
console.log('Objects');
console.log('###################################');

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 33,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return 2020 - this.age;
  }
};

val = person;
console.log(val); // {firstName: "Steve"}

val = person.firstName;
console.log(val); // Steve

val = person['firstName'];
console.log(val); // Steve

val = person.age;
console.log(val); // 33

val = person.hobbies[1];
console.log(val); // sports

val = person.address.state;
console.log(val); // FL

val = person.getBirthYear();
console.log(val); // 1987

// _____________________________________________________________________________

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 27 },
  { name: 'Nancy', age: 26 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// John
// Mike
// Nancy
