// Conscatination and Interpolation

var messageToPrint = "The price of the product is 50 dollars.";

var productPrice = 50;
var currency = "dollars";
var itemName = "Cup";

// Conscatination
var message1 = "The price of the " + itemName + " is " + productPrice + " " + currency + ".";
console.log(message1);

// Interpolation
var message2 = `The price of the ${itemName} is ${productPrice} ${currency}.`;
console.log(message2);