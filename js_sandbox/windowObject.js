console.log('###################################');
console.log('Window Object');
console.log('###################################');

// Console Log

window.console.log('The console is part of the window.');

// Alert

// window.alert('Hello World');

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Get Outer Height and Width --> gives current dimensions of outer window
val = window.outerHeight;
console.log(val); // 1087

val = window.outerWidth;
console.log(val); // 974

// Get Inner Height and Width --> gives current dimensions of inner window
val = window.innerHeight;
console.log(val); // 437

val = window.innerWidth;
console.log(val); // 958

// Scroll Points // --> how far is the page scrolled on x/y axis?

val = window.scrollY; // vertical
console.log(val);

val = window.scrollX; // horizontal
console.log(val);

// Location Object

val = window.location;
console.log(val);

val = window.location.hostname;
console.log(val); // 127.0.0.1

val = window.location.port;
console.log(val); // 5500

val = window.location.href;
console.log(val); // http://127.0.0.1:5500/js_sandbox/index.html

val = window.location.search;
console.log(val); // This will show query string

// Redirect

// window.location.href = 'http://google.com';

// Reload

// window.location.reload(); // Causes the page to reload

// History Object --> returns reference that provides interface for manipulating browser session history.

// val = window.history.go(0); // brings us to the address according to the num argument. For instance -1 is the last page visited before the current one.

val = window.history.length;
console.log(val); // 5 --> number of pages saved in browser session history

// Navigator Object --> displays browser specific info and methods

val = window.navigator;
console.log(val);

val = window.navigator.appName;
console.log(val); // Netscape --> This will always be Netscape unless using IE.

val = window.navigator.appVersion;
console.log(val); // 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36

val = window.navigator.userAgent;
console.log(val); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36

val = window.navigator.platform;
console.log(val); // Win32

val = window.navigator.vendor;
console.log(val); // Google Inc.

val = window.navigator.language;
console.log(val); // en-US
