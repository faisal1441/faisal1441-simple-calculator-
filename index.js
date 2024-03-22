#! /usr/bin/env node
Promise.resolve().then(function () { return require("inquirer"); }).then(function (inquirer) {
}).catch(function (error) {
});
var answer = await inquirer.prompt([{ answer: "Enter first number", type: "number", Name: "firstNumber" },
    { message: "enter second number", type: "number", Name: "second number" },
    { message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", " Substraction", "Multiplication", "Division"],
    }
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstName + answer.secondNumber);
}
else if (answer.operator === 'Substation') {
    console.log(answer.firstName + answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstName + answer.secondNumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstName + answer.secondNumber);
}
