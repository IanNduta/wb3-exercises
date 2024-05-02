"use strict";

window.onload = init;

const dataInPut = document.getElementById("dataInPut");
const enterDate = document.getElementById("enterDate");

function init(){
    enterDate.click = onClickedEnterDate;
}

function onClickedEnterDate(){
    let newDateInPut = new Date();
    newDateInPut = dataInPut.value;
    return newDateInPut;
}

console.log(newDateInPut.toString());