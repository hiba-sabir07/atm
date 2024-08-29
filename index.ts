#!/usr/bin/env node

import inquirer from "inquirer"; 

let myBalance = 1000000 ; 
let myPin = 1234; 

//Asking the user to enter the pin
let pinAnswer = await inquirer.prompt([
  {
    message:"Please enter your pin:",
    type:"number",
    name:"pin",   
  },
]);

//conditional statemenr If the pin entered by the user is correct 
if (pinAnswer.pin === myPin){
  console.log("The pincode entered is correct");

//Asking the user what transaction type they want to perform
let operationAns = await inquirer.prompt([
  {
    message:"Please select transaction type:",
    type:"list",
    name:"operation",
    choices:[ "withdraw","check balance"]
  }
]);
console.log(operationAns);

//Condition statment if withdraw option is selected by the user
if (operationAns.operation === "withdraw"){
   let amountAns = await inquirer.prompt([
    {
     name:"amount",
     message:"enter your amount",
     type:"number",
    }
  ]);
  myBalance -= amountAns.amount;
  console.log("Your remaining balance is:" + myBalance)
} 

// Condition statment if withdraw option is selected by the user
 if(operationAns.operation === "check balance"){
  console.log("Your current balance is :" + myBalance);
 }
}
else{
  console.log("The pincode entered is incorrect");
}

























