console.log('#############');
console.log('DOM Traversal');
console.log('#############');

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes

val = list.childNodes; // returns Node List

// Get children element nodes

val = list.children; // returns HTML Collection
val = list.children[1];
list.children[1].textContent = 'Hello';

// Get children of children
list.children[3].children[0].id = 'text-link';
val = list.children[3].children[0];

// First child

val = list.firstChild;
val = list.firstElementChild;

// Last child

val = list.lastChild;
val = list.lastElementChild;

// Count child elements

val = list.childElementCount;

// Get parent node

val = listItem.parentNode;
val = listItem.parentElement;

// Get parents of parent

val = listItem.parentElement.parentElement;

// Get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
