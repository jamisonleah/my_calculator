import React, { useState } from "react";

function Calculator() {
  // Declare a state variable called "value" and set it to 0
  const [value, setValue] = useState(0);


  // Define the calculator functions
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => x / y;

  // Declare a state variable called "operation" and set it to null
  const [operation, setOperation] = useState(null);

  // Declare a state variable called "prevValue" and set it to null
  const [prevValue, setPrevValue] = useState(null);

  // Handle clicks on the buttons
  const handleClick = (e) => {
    const buttonValue = e.target.value;

    // If the button is a digit, update the value state variable
    if (!isNaN(buttonValue)) {
      setValue(parseInt(`${value}${buttonValue}`));
    }

    // If the button is an operator, store the current value and the operator
    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      setOperation(buttonValue);
      setPrevValue(value);
      setValue(0);
    }

    // If the button is the equals sign, perform the calculation
    if (buttonValue === "=") {
      switch (operation) {
        case "+":
          setValue(add(prevValue, value));
          break;
        case "-":
          setValue(subtract(prevValue, value));
          break;
        case "*":
          setValue(multiply(prevValue, value));
          break;
        case "/":
          setValue(divide(prevValue, value));
          break;
        default:
          break;
      }
    }

    // If the button is the clear sign, reset the state variables
    if (buttonValue === "C") {
      setValue(0);
      setOperation(null);
      setPrevValue(null);
    }

  };

  return (
  <div class="flex flex-col m-10 h-full w-64 bg-gray-900 rounded-lg shadow-lg">
    <div id ='output' class="flex-1 text-right text-white rounded-t-lg font-bold py-2 px-6 bg-indigo-400"> <center> My Calculator </center> </div>
    <div id ='output' class="flex-1 text-right text-white font-bold py-2 px-6 bg-gray-700"> {value} </div>
    
    <div class="grid rounded-b-lg p-5 grid-cols-4 gap-1 bg-gray-800">
    
      <button value="7" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>7</button>
      <button value="8" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>8</button>
      <button value="9" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>9</button>
      <button  value="+" class="flex-1 rounded-lg  bg-indigo-500 text-gray-100 hover:bg-gray-700" onClick={handleClick}>+</button>


      <button value="4" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>4</button>
      <button value="5" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>5</button>
      <button value="6" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>6</button>
      <button value="-" class="flex-1 rounded-lg  bg-indigo-500 text-gray-100 hover:bg-gray-700"onClick={handleClick}>-</button>

      <button value="1" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>1</button>
      <button value="2" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>2</button>
      <button value="3" class="flex-1 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>3</button>
      <button value="*" class="flex-1 rounded-lg  bg-indigo-500 text-gray-100 hover:bg-gray-700"onClick={handleClick}>*</button>


      <button value="0" class="flex-1 col-start-2 rounded-lg text-gray-100 hover:bg-gray-700"onClick={handleClick}>0</button>
      <button value="/" class="flex-1 col-start-4 rounded-lg  bg-indigo-500 text-gray-100 hover:bg-gray-700"onClick={handleClick}>/</button>

      <button value="=" class="flex-1 col-span-3 rounded-lg bg-red-500 hover:bg-red-600 text-white"onClick={handleClick}>=</button>
      <button value="C" class="flex-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700" onClick={handleClick}> C </button>


    </div>
  </div>
  ); 
}
export default Calculator; 
