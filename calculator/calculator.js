// Interactive Calculator Functions

// Function to get input values
function getInputs() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return null;
    }
    
    return { num1, num2 };
}

// Function to display result
function displayResult(result) {
    document.getElementById("result").textContent = result;
}

// Addition
function add() {
    const inputs = getInputs();
    if (inputs) {
        const result = inputs.num1 + inputs.num2;
        displayResult(result);
        console.log(`${inputs.num1} + ${inputs.num2} = ${result}`);
    }
}

// Subtraction
function subtract() {
    const inputs = getInputs();
    if (inputs) {
        const result = inputs.num1 - inputs.num2;
        displayResult(result);
        console.log(`${inputs.num1} - ${inputs.num2} = ${result}`);
    }
}

// Multiplication
function multiply() {
    const inputs = getInputs();
    if (inputs) {
        const result = inputs.num1 * inputs.num2;
        displayResult(result);
        console.log(`${inputs.num1} * ${inputs.num2} = ${result}`);
    }
}

// Division
function divide() {
    const inputs = getInputs();
    if (inputs) {
        if (inputs.num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        const result = inputs.num1 / inputs.num2;
        displayResult(result.toFixed(2));
        console.log(`${inputs.num1} / ${inputs.num2} = ${result.toFixed(2)}`);
    }
}

// Clear the calculator
function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    displayResult("0");
    console.log("Calculator cleared");
}
