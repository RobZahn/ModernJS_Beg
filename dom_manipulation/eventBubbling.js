console.log('###########################');
console.log('Event Bubbling & Delegation');
console.log('###########################');

// EVENT BUBBLING:

// Events bubble up through their parents in the DOM.

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// });

// With a single click:

// card title
// card content
// card
// col

// _____________________________________________________________________________

// EVENT DELEGATION:

// Event listener is placed on a parent element and then going down to the desired child.

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', delItem);

// function delItem() {
//   console.log('delete item');
// }

// In the above code, only the first link element will respond to the event. We
// need to use event delegation to make them all work.

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete item');
    e.target.parentElement.parentElement.remove();
  }
}
