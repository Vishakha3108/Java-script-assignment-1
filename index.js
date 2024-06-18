/* Q - Buliding a paymet page chekout page and must display the final price after the discount . Create a simple discount calculater that takes two from the variables - the total cost and the discount parsentage - and prints the discount value.*/

let totalvalue = 2000;
totalvalue = prompt("Enter bill amount");
totalvalue = Number.parseInt(totalvalue);
let discountParcentage = 20;
discountParcentage = prompt("Enter your discount parcentage");
discountParcentage = Number.parseInt(discountParcentage);
let afterDiscount = totalvalue - (totalvalue * discountParcentage / 100);
console.log("The final price after discount is  : Rs. " + afterDiscount);