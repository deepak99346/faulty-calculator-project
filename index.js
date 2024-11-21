function faultyCalculator(num1, operator, num2) {
    // Define some faulty cases
    if (num1 === 5 && operator === '+' && num2 === 5) {
        return 20; // Faulty result for 5 + 5
    } else if (num1 === 7 && operator === '*' && num2 === 3) {
        return 25; // Faulty result for 7 * 3
    } else if (num1 === 10 && operator === '-' && num2 === 2) {
        return 0; // Faulty result for 10 - 2
    }

    // Normal calculator operations
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Error: Invalid operator";
    }
}

// Take inputs from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter an operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

// Calculate the result using the faulty calculator function
const result = faultyCalculator(num1, operator, num2);

// Display the result
alert("The result is: " + result);
