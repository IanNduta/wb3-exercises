"use strict";

window.onload = init;

const dataInPut = document.getElementById("dataInPut");
const enterDate = document.getElementById("enterDate");
const outPut = document.getElementById("outPut");

function init(){
    enterDate.onclick = onClickedEnterDate;
}

function onClickedEnterDate(){
    //get the input
    let thedatevalue = dataInPut.value;


    //calculate unknowns
    let newDate;
    newDate = new Date(thedatevalue);



    //display output
    outPut.innerHTML = newDate.toString();


   // let newDateInPut = new Date();
   // 
   // return newDateInPut;
}

//console.log(newDateInPut.toString());