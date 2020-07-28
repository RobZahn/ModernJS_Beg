console.log('###################################');
console.log('Dates and Time');
console.log('###################################');

const today1 = new Date();
let birthday = new Date('9-10-1981 11:25:00');

val = today1;
console.log(val); // Mon Jul 27 2020 23:26:52 GMT-0400 (Eastern Daylight Time)
console.log(typeof val); // object

val = birthday;
console.log(birthday); // Thu Sep 10 1981 11:25:00 GMT-0400 (Eastern Daylight Time)

birthday = new Date('September 10 1981 06:30:00');
val = birthday;
console.log(val); // Thu Sep 10 1981 06:30:00 GMT-0400 (Eastern Daylight Time)

birthday = new Date('9/10/82 10:00:00');
val = birthday;
console.log(val); // Fri Sep 10 1982 10:00:00 GMT-0400 (Eastern Daylight Time)

// Methods

val = today1.getMonth();
console.log(val); // 6 --> Months are 0 based so January is 0, etc

val = today1.getDate();
console.log(val); // 27 --> Day is not 0 based

val = today1.getDay(); // gives day of the week starting on Sunday
console.log(val); // 1 (Monday)

val = today1.getFullYear();
console.log(val); // 2020

val = today1.getHours();
console.log(val); // 23

val = today1.getMinutes();
console.log(val); // 36

val = today1.getSeconds();
console.log(val); // 37

val = today1.getMilliseconds();
console.log(val); // 350

val = today1.getTime(); // gives time stamp
console.log(val); // 1595907439269 --> amount of seconds that have passed since January 1, 1970

birthday.setMonth(2);
console.log(birthday); // Wed Mar 10 1982 10:00:00 GMT-0500 (Eastern Standard Time)

birthday.setDate(12);
console.log(birthday); // Fri Mar 12 1982 10:00:00 GMT-0500 (Eastern Standard Time)
