function displayMailingLabel(name, address,city,state,zip){
    console.log("My name is " + name + " My street address is " + address + " The city I live in is " + city + " The state I live in is " + state + " And I'm zip code is " + zip);
    //console.log(name)
    //console.log(address)
    //console.log(city)
    //console.log(state)
    //console.log(zip)
}

function addNumbers(num1,num2){
    let answer
    answer = Number(num1 + num2);
    console.log(answer);
}

function displayReceipt(totalDue,amountPaid){
    let change;
    change = totalDue - amountPaid;
    console.log("Your total is " + totalDue);
    console.log("The amount you paid is " + amountPaid);
    console.log("Your change is " + change);
}

displayMailingLabel("john", "Sinnea", "Dallas", "Ga", 30068);
addNumbers(3,5);
displayReceipt(2,6);
