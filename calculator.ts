import inquirer from "inquirer";

let value1 = await inquirer.prompt([{
    name: 'value1',
    message: 'Enter first value',
    type: 'number',
}]);

let value2 = await inquirer.prompt([{
    name: 'value2',
    message: 'Enter second value',
    type: 'number',
}]);

console.log("Press + for addition");
console.log("Press - for subtraction");
console.log("Press * for multiplication");
console.log("Press / for division");
console.log("Press % for division");

let operator = await inquirer.prompt([{
    name: 'operator',
    message: 'Enter Action to be performed',
    type: 'input',
}]);

if (operator.operator == '+') {
    console.log("Addition is " + (value1.value1 + value2.value2));
} else if (operator.operator == '-') {
    console.log("Subtraction is " + (value1.value1 - value2.value2));
} else if (operator.operator == '*') {
    console.log("Multiplication is " + (value1.value1 * value2.value2));
} else if (operator.operator == '/') {
    if (value2.value2 == 0) {
        console.log("Error: Division by zero");
    } else {
        console.log("Division is " + (value1.value1 / value2.value2));
    }
} else if (operator.operator == '%') {
    console.log("Modulus is " + (value1.value1 % value2.value2)); 
}else {
    console.log("Invalid operator");
}