// Realational or Comparison Operators

// >, <, >=, <=, ==, ===, !=, !==

// == checks for value equality = loose equality
// === checks for value and type equality = strict equality
// != checks for value inequality
// !== checks for value and type inequality

var result = 5 >= 5; // true
console.log(result + ' 1');

// Logical Operators

// && (AND), || (OR), ! (NOT)

console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true


var ageIsMoreThan18 = true;
var isUSCititizen = true;
var isUSCititizen = false;

var eligibilityToDriverLicense = ageIsMoreThan18 && isUSCititizen
console.log('This person eligibility to driver license: ' + eligibilityToDriverLicense);