console.log('###################################');
console.log('Template Literals');
console.log('###################################');

const newName = 'John';
const newAge = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello() {
  return 'hello';
}

// Without template strings:

html =
  '<ul><li>Name: ' +
  newName +
  '</li><li>Age: ' +
  newAge +
  '</li><li>Job: ' +
  job +
  '</li><li>City: ' +
  city +
  '</li></ul>';

document.body.innerHTML = html;

// With template strings:

html = `
  <ul>
    <li>Name: ${newName}</li>
    <li>Age: ${newAge}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : '30 or under'}</li>
  </ul>
`;

document.body.innerHTML = html;
