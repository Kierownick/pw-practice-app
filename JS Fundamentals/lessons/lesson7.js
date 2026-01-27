// Functions

// Declarative function
function helloOne(){
    console.log("Hello One");
}

helloOne();

// Anonymous function
var helloTwo = function(){
    console.log("Hello Two");
}

helloTwo();

// ES6 Function (Arrow function)
var helloThree = () => {
    console.log("Hello Three");
}

helloThree();

// Function with parameters
function printName (name, lastName){
    console.log(name + " " + lastName);
}

printName("Adrian", "Wozowsky");

// Function with return value
function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
import { number } from './helpers/randomNumber.js';

var myResult = multiplyByTwo(number(1, 10));
console.log(myResult);

var myResult = myResult / 2;
console.log(myResult);


// Import function

import { printAge } from './helpers/printHelper.js';

var age = number(18, 65);
printAge(age);

// Import everything
import * as helper from './helpers/printHelper.js';

helper.printAge(number(18, 65));