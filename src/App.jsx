import React, { useState } from 'react';
import classes from './modules/App.module.scss';
 
const App = () => {
    const [currentInput, setCurrentInput] = useState('');
    const [firstColor, SetFirstColor] = useState(false);
    const [secondColor, SetSecondColor] = useState(false);
    const [thirdColor, SetThirdColor] = useState(false);

    const FirstClickHandler = () => {
        SetFirstColor(true);
        SetSecondColor(false);
        SetThirdColor(false);
      }
      const SecondClickHandler = () => {
        SetSecondColor(true);
        SetThirdColor(false);
        SetFirstColor(false);
      }
      const ThirdClickHandler = () => {
        SetThirdColor(true);
        SetFirstColor(false);
        SetSecondColor(false);
      }
      
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
    <>
     <div className={classes['main-calculator']} id="calculator">
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
       <div className={`${classes['first-mode']} ${firstColor === true && classes['first-mode']} ${secondColor === true && classes['second-mode']} ${thirdColor === true && classes['third-mode']}`}>
      <h2 className={classes['head-line']}>THEME</h2>
      <div className={classes['main-box']}>
        <button onClick={FirstClickHandler} className={`${classes['first-button']}`}></button>
        <button onClick={SecondClickHandler} className={`${classes['second-button']}`}></button>
        <button onClick={ThirdClickHandler} className={`${classes['third-button']}`}></button>
      </div>
    </div>
     </div>
     
     </>
   );
 };

 export default App;
