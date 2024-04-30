"use strict";

function convertFtoc(fahrenheit){
    let celsius;

    celsius = (fahrenheit-32) * (5 / 9);

    return celsius;
}

let input = 80;
let output = convertFtoc(input);
console.log(output);