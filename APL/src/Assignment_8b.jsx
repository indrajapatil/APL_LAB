import React, { useState } from "react";

function CalculatorWeb() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      calculateResult();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      // Basic parsing to handle + - * /
      let operatorFound = /[+\-*/]/.exec(input);
      if (!operatorFound) {
        setResult("Error");
        return;
      }

      const operator = operatorFound[0];
      const [num1, num2] = input.split(operator).map(Number);
      let res;

      switch (operator) {
        case "+":
          res = num1 + num2;
          break;
        case "-":
          res = num1 - num2;
          break;
        case "*":
          res = num1 * num2;
          break;
        case "/":
          res = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
          break;
        default:
          res = "Error";
      }

      setResult(res);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h2>React Web Calculator</h2>

      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        {["1","2","3","4","5","6","7","8","9","0","+","-","*","/",".","C","="].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalculatorWeb;
