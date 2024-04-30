"use script";

function convertCtof(celsius){
    let fahrenheit;

    fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

let input = 90;
let outPut = convertCtof(input);
console.log(outPut);

