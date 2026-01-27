// Loops

// for(statement1; statement2; statement3) {} = for i loop

for(let i=0; i<5; i++) {
    console.log('For Loop');
}

var cars = ["Toyota", "Honda", "Ford", "BMW"];
// for of loop

for(let car of cars) {
    console.log(car);
    if(car == "Toyota") {
        break;
    }
}

// ES6 syntax for each loop

cars.forEach(car => {
    console.log(car);
    if(car == "Ford") {
        return;
    }
})

