/* Q - Implement the login feature that has two variable : username and password. You should check if the  username is "admin" and the password is "12345". If both condition are true, print "Login succesful"; othrwise, print"invalid credentials".*/

let username;
let password;
username = prompt("Enter your username")
password = prompt("enter your password")
if (username !== "admin"){
    console.log("You enterd a wrong username try again!")
}
else if (username == "admin" , password == 12345 ){
  console.log("Login successful")
}
else{
    console.log("password is wrong please try again!")
}






