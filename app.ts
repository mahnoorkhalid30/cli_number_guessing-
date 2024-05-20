#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt ([
    {
    name : "UserGuessedNumber",
    type : "number",
    message : "please guess the number between 1 to 10",
}
]);
console.log(answer);
if(answer.UserGuessedNumber === randomNumber){
console.log("congratulaion ! you guessed right number");

}else{
console.log("you guess a wrong number");
};

