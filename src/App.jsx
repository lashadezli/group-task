import React, { useState } from 'react';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [operator, setOperator] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const appendNumber = (number) => {

    if (['+','-','*', '/'].includes(number)) 
    {
       setOperatorHandler(number);
    } else
    {
      setCurrentInput(currentInput + number);
    }
  };

  const setOperatorHandler = (op) => {
    if (operator === '') {
    setStoredValue(currentInput);
    setOperator(op);
    setCurrentInput('');
    } else{
      calculate();
      setOperator();
    }
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(storedValue) + parseFloat(currentInput);
        break;
      case '-':
        result = parseFloat(storedValue) - parseFloat(currentInput);
        break;
      case '*':
        result = parseFloat(storedValue) * parseFloat(currentInput);
        break;
      case '/':
        result = parseFloat(storedValue) / parseFloat(currentInput);
        break;
      default:
        return;
    }
    setCurrentInput(result.toString());
    setOperator('');
    setStoredValue('');
  };

  const clearDisplay = () => {
    setCurrentInput('');
    setOperator('');
    setStoredValue('');
  };

  const deleteLast = () => {
    setCurrentInput(currentInput.slice(0, -1));
  };

  return (
    <div id="calculator">
      <input type="text" value={currentInput || '0'} readOnly />
      <br />
      {[7, 8, 9, '+'].map((number) => (
        <button key={number} onClick={() => appendNumber(number)}>
          {number}
        </button>
      ))}
      <br />
      {[4, 5, 6, '-'].map((number) => (
        <button key={number} onClick={() => appendNumber(number)}>
          {number}
        </button>
      ))}
      <br />
      {[1, 2, 3, '*'].map((number) => (
        <button key={number} onClick={() => appendNumber(number)}>
          {number}
        </button>
      ))}
      <br />
      {[0, '/', '=', 'C', 'DEL'].map((item) => (
        <button key={item} onClick={() => (item === '=' ? calculate() : item === 'C' ? clearDisplay() : item === 'DEL' ? deleteLast() : setOperatorHandler(item))}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Calculator;
