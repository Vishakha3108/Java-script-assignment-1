/*The ticket price depends on the type of the viewer.write a program which calculates the price accordingly and prints the total price to be paid.Let's assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and senior price is Rs. 120.
*/
let numberOfChilds = 2;
numberOfChilds = prompt("enter number of child ticket")
let numberOfAdults = 1;
numberOfAdults = prompt("enter a number of adult ticket")
let numberOfSeniors = 1;
numberOfSeniors = prompt("enter a number of senior ticket number")



let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;



let totalPrice = numberOfChilds * childTicketPrice + numberOfAdults * adultTicketPrice + numberOfSeniors * seniorTicketPrice;
// console.log(`The total ticket price is ${totalPrice}`);
console.log("total price  of ticket  = " + totalPrice)