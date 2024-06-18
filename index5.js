/*You are developing a form validation system.Write a programe that takes user information(such as name , email, age) and uses the type of operator to check the data type of each input. Print appropriate messages like "Name should be string", "Email should be a string ", or "Age should be a number ".If any field is not proper.  */


let name = "Mithun";
let email = "Mithun.s@pw.live";
let age = "21";

if (typeof name !== "string"){
    console.log("Name shoul be a srting");
} else if ( typeof email !== "string") {
    console.log("Email should be string");
} else if ( typeof age !== "number") {
    console.log("Age should be a Number")
} else {
    console.log("Yahh!!! All the fields are proper.")
}
