import inquirer from "inquirer";

const answer: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter your first number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter your second number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*","+","-","/","%","**"],
        message: "Please select your operator: "
    }

]);

const {numberOne,numberTwo,operator} = answer;
if(numberOne && numberTwo && operator){
    let result;
    if(operator === "+"){
        result = numberOne + numberTwo;
    }else if(operator === "-"){
        result = numberOne - numberTwo;
    }
    else if(operator === "*"){
        result = numberOne * numberTwo;
    }
    else if(operator === "/"){
        result = numberOne / numberTwo;
    }
    else if(operator === "%"){
        result = numberOne % numberTwo;
    }
    else if(operator === "**"){
        result = numberOne ** numberTwo;
    }
    console.log("your result is: ",result);

}else{
    console.log("Please enter valid numbers");
}