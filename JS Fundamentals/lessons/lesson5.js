// Conditional Statement
// If hour between 6 and 12: Good Morning
// If hour between 12 and 18: Good Afternoon
// Otherwise: Good Evening


import { number as random } from './helpers/randomNumber.js';

var hour;
hour = random(0, 24);
console.log("Hour: " + hour);

if (hour >=6 && hour <12) {
    console.log("Good Morning");
}
else if (hour >=12 && hour <18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}
