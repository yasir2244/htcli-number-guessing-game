#! /usr/bin/env node
import inquirer from "inquirer";

console.log("wellcome to CodeWithyasir - ClI Number Guessing Game");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "usrGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if(answer.usrGuessedNumber === randomNumber){
console.log("congratulation ! you guess a correct number.");
}
else{
    console.log("sory, you guess a wring number");
}