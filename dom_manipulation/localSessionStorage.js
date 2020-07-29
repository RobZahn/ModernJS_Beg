console.log('#######################');
console.log('Local & Session Storage');
console.log('#######################');

// Local storage will persist until manually cleared out. Session storage will
// persist only until the browser is closed.

// Set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item

// sessionStorage.setItem('name', 'Beth');

// remove from storage

// localStorage.removeItem('name');

// get from storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// clear local storage

// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function (task) {
//   console.log(task);
// });

// console.log(tasks);
