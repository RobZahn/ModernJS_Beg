console.log('#################');
console.log('Creating Elements');
console.log('#################');

// Create element

const li = document.createElement('li');

// Add class to element

li.className = 'collection-item';

// Add id to element

li.id = 'new-item';

// Add attribute

li.setAttribute('title', 'New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add class to link
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);
