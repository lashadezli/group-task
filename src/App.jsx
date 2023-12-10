 import React, { useState } from 'react';

 const Calculator = () => {
   const [currentInput, setCurrentInput] = useState('');

   const appendNumber = (number) => {
     setCurrentInput(currentInput + number);
   };

   const setOperatorHandler = (operator) => {
     setCurrentInput(currentInput + operator);
   };

   const calculate = () => {
     try {
       setCurrentInput(eval(currentInput).toString());
     } catch (error) {
       setCurrentInput('Error');
     }
   };

   const clearDisplay = () => {
     setCurrentInput('');
   };

   const deleteLast = () => {
     setCurrentInput(currentInput.slice(0, -1));
   };

   return (
     <div id="calculator">
       <input type="text" value={currentInput || '0'} readOnly />
       <br />
       <button onClick={() => appendNumber('7')}>7</button>
       <button onClick={() => appendNumber('8')}>8</button>
       <button onClick={() => appendNumber('9')}>9</button>
       <button onClick={() => setOperatorHandler('+')}>+</button>
       <br />
       <button onClick={() => appendNumber('4')}>4</button>
       <button onClick={() => appendNumber('5')}>5</button>
       <button onClick={() => appendNumber('6')}>6</button>
       <button onClick={() => setOperatorHandler('-')}>-</button>
       <br />
       <button onClick={() => appendNumber('1')}>1</button>
       <button onClick={() => appendNumber('2')}>2</button>
       <button onClick={() => appendNumber('3')}>3</button>
       <button onClick={() => setOperatorHandler('*')}>*</button>
       <br />
       <button onClick={() => appendNumber('0')}>0</button>
       <button onClick={() => setOperatorHandler('/')}>/</button>
       <button onClick={calculate}>=</button>
       <button onClick={clearDisplay}>C</button>
       <button onClick={deleteLast}>DEL</button>
     </div>
   );
 };

 export default Calculator;



