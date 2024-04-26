#! /usr/bin/env node
import inquirer from "inquirer";
let Balance = 10000;
console.log(`Your Balance is: ${Balance}`);
const myPin = 1234;
const pinNumber = await inquirer.prompt([
    { message: "Enter your pin Number", name: "myPinNum", type: "number" },
]);
if (pinNumber.myPinNum === myPin) {
    let operation = await inquirer.prompt([
        {
            name: "operationAns",
            type: "list",
            message: "Slect Option",
            choices: ["Withdraw", "CheckBalance", "fast cash"],
        },
    ]);
    if (operation.operationAns === "Withdraw") {
        let input = await inquirer.prompt([
            {
                name: "inputAns",
                type: "number",
                message: "Enter Amount",
            },
        ]);
        if (input.inputAns > Balance) {
            console.log(`Please select a valid value.`);
        }
        else if (input.inputAns < Balance) {
            Balance -= input.inputAns;
            console.log(`Your remaining Balance is: ${Balance}`);
        }
    }
    else if (operation.operationAns === "CheckBalance") {
        console.log(`Your Balance is: ${Balance}`);
    }
    else if (operation.operationAns === "fast cash") {
        let option = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What You want To select",
                choices: [10000, 5000, 3000, 50, 25],
            },
        ]);
        Balance -= option.opt;
        console.log(`Your Balance is: ${Balance}`);
    }
}
else {
    console.log(`Invalid Pin`);
}
