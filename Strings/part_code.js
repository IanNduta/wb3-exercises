"use strict";


function getSupplier(parseCode){
    let posOfColon = parseCode.indexOf(":");
    let supplierCode = parseCode.substring(0, posOfColon);
    //console.log(supplierCodePosition);
    return supplierCode;
}

function getProductNumber(parseCode){
    let productNumberPositionBefore;
    let productPositionAfter;
    productNumberPositionBefore = parseCode.indexOf(":");
    productPositionAfter = parseCode.indexOf("-");
    let productNumber = parseCode.substring(1 + productNumberPositionBefore, productPositionAfter);
    // console.log(supplierCodePosition);
    // console.log(supplierCodePositionOfCollen);
    return productNumber; 
}

function getSize(parseCode){
    let sizePosition;
    sizePosition = parseCode.indexOf("-");
    let size = parseCode.substring(1 + sizePosition);
    return size;
}

let code1 =  "SKSLKFOPEKFOEF:123456789-M";
let code2 = "ASDFSADF:12344-L";

let code3 = "ZZasdf:55221-S";
let code3Supplier = getSupplier(code3);
let code3ProductNumber = getProductNumber(code3);
let code3size = getSize(code3);


console.log( getSupplier(code1));
console.log( getProductNumber(code1));
console.log( getSize(code1));

console.log( getProductNumber("sdfasde:554-W"));


console.log("---------------------")
console.log(code3);
console.log(code3Supplier);
console.log(code3ProductNumber);
console.log(code3size);

//getProductNumber()
//getSize()
