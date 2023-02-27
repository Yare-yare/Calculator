// Creating functions for the calculator 
let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

// Creating a new function called operate that takes an operator and 2 numbers and calls one of the above function on the numbers
let operate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === ".") {
    return parseFloat(`${a}.${b}`);
  } else {
    return `invalid operator: ${operator}`;
  }
};

// Get displayBar
const displayBar = document.querySelector(".displayBar");

// Get buttons
const buttons = [...document.querySelectorAll("button")];

// Array used to store operations
let operations = [];

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // If the button is a number
    if (!isNaN(event.target.innerText)) {
      // Checking to see if the operations array is empty or if the last item in the array is a number or not
      // If any are true, the operator is pushed/added into the "operations" array
      // I used typeOf to check if the last item was a number or not
      if (operations.length === 0 || typeof operations[operations.length - 1] !== "number") {
        operations.push(parseFloat(event.target.innerText));
      } else {
        let lastNumber = operations.pop(); //last number in the operation array which will be used to concatnate with newNumber
        let newNumber = parseFloat(lastNumber.toString() + event.target.innerText); //Combining/concatnating the two numbers 
        operations.push(newNumber);
      }

      // Update the display
      displayBar.innerText = operations.join(" "); //join concatnates all elements in an array
    } else {
      // If the button is an operator
      if (event.target.innerText === "=") {
        // Evaluate the operations array and display the result
        let result = operations[0];

        for (let i = 1; i < operations.length; i += 2) {
          let operator = operations[i];
          let number = operations[i + 1];

          result = operate(result, operator, number);
        }

        displayBar.innerText = result.toString();

        // Reset the operations array
        operations = [result];
      } else {
        // If it is any other operator besides the "=" add it to the operations array
        operations.push(event.target.innerText);

        // Update the display
        displayBar.innerText = operations.join(" ");
      }
    }
    if(displayBar.innerText.length < 13){
      displayBar.style.fontSize = '43px';
    }
    else{
      displayBar.style.fontSize = 'initial'
    }
  });
});

// Clear button
const clearButton = document.querySelector(".clearButton");

clearButton.addEventListener("click", () => {
  operations = []; 
  displayBar.innerText = "0";
});