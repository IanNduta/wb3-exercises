"use strict";

function getDateAsString(date){
    date = new Date();
    let displayDate = date;
    displayDate = displayDate.toString();
    return displayDate;
}

function getDateToString(date){
    date = new Date();
    let displayDate = date;
    displayDate = displayDate.toDateString();
    return displayDate;
}

function getUTCString(date){
    date = new Date();
    let displayDate = date;
    displayDate = displayDate.toUTCString();
    return displayDate;
}

function getLocalString(date){
    date = new Date();
    let displayDate = date;
    displayDate = displayDate.toLocaleString()
    return displayDate;
}

let inPut = "4/29/2024";
console.log(getDateAsString(inPut));
console.log(getDateToString(inPut));
console.log(getUTCString(inPut));
console.log(getLocalString(inPut));



