export function printAge(age) {
    console.log(age);
}
 // export class CustomerDetails {
 class CustomerDetails {

    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * 
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails();