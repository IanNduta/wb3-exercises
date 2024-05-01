"use strict";

let name = "Brenda Kaye";
let firstName;
let lastName;
let namePose



function parseAndDisplayName (name){
    namePose = name.indexOf(" ");
    firstName = name.substring(0, namePose);
    lastName = name.substring(1 + namePose);
    console.log("Name: " + name);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    // console.log(namePose);

}
parseAndDisplayName("Ian Nduta");

