// Single Element DOM Selectors

// document.getElementById()

console.log(document.getElementById('task-title')); // <h5 id="task-title">Tasks</h5>

// Get things from the element

console.log(document.getElementById('task-title').id); // task-title
console.log(document.getElementById('task-title').className); // test

const taskTitle = document.getElementById('task-title');

// Change styling

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// _____________________________________________________________________________

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// only works on first even/odd because it is a single element selector

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
