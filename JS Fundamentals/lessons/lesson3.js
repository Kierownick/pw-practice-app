// Objects

var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMember: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    phoneNumbers: ["123-456-7890", "987-654-3210"],
    car: ["Toyota", "Honda", "Ford", "BMW"]
}
customer.firstName = "Adrian";

console.log(customer);
console.log(customer.firstName);

console.log(`${customer.address.city}`);
console.log(`${customer.firstName} ${customer.lastName}`);

// Arrays

var car = ["Toyota", "Honda", "Ford", "BMW"];
console.log(car[0]);

car [1] = "Mercedes";
console.log(car[1]);

console.log(customer.car[1]);