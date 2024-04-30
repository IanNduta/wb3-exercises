"user strict";

function getSocSecTax(gross){
    let social;

    social = gross * .0062;
    return social
}

let inPut = 90;
let outPut = getSocSecTax(inPut);
console.log(outPut);

function getMedicareTax(grossPay){
    let medicare;

    medicare = grossPay * .0145;
    return medicare;
}

let getInPut = 90;
let getOutPut = getMedicareTax(getInPut);
console.log(getOutPut);

function getFederalTax(grossFederalPay, taxCode){

    if (taxCode = 0){
        taxCode = grossFederalPay * .23;
        console.log(taxCode);
    }
    else if(taxCode = 1){
        taxCode = grossFederalPay * .21;
        console.log(taxCode);
    }
    else if(taxCode = 2){
        taxCode = grossFederalPay * .195;
        console.log(taxCode);
    }
    else if(taxCode = 3){
        taxCode = grossFederalPay * .185;
        console.log(taxCode);
    }
    else if(taxCode < 4) {
        taxCode = grossFederalPay * .18;
        console.log(taxCode);
    }
    else{
        console.log(NaN);
    }

    return taxCode;
    
}

let inPutGross = 100;
let inPutCode = 3;
let outPutGross = getFederalTax(inPutGross, inPutCode);
console.log(outPutGross);