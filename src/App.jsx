import React, { useState } from 'react';
import classes from '../modules/App.module.scss';

// Define a functional component named App
const App = () => {
  // State hook to manage the current input in the calculator
  const [currentInput, setCurrentInput] = useState('');

  // State hook to manage the theme of the calculator
  const [theme, setTheme] = useState('default');

  // Function to change the theme based on the button pressed
  const changeTheme = (newTheme) => {
    setTheme(newTheme); // Update the theme state
  };

  // Function to append a number to the current input
  const appendNumber = (number) => {
    // Ensure only one decimal point in a number
    if (number === '.' && currentInput.includes('.')) {
      return;
    }
    setCurrentInput(currentInput + number);
  };


  const setOperatorHandler = (operator) => {
    // If the input is not empty and does not end with an operator, append the operator
    if (currentInput !== '' && !/[+\-*/]$/.test(currentInput)) {
      setCurrentInput((prevInput) => prevInput + operator);
    }
  };


  //(prevInput) => prevInput + operator is an arrow function used as an argument for setCurrentInput. prevInput is a 
 // variable that holds the current state value (currentInput) at the 
 // time when the setCurrentInput function is called. It allows you to 
  //safely update the state based on the previous state.
  
  
  const calculate = () => {
    try {
      if (currentInput.trim() !== '') {   
        //The trim method in JavaScript is a built-in string method that removes 
        //whitespace characters from the beginning and end of a string. 
        //The whitespace characters include spaces, tabs, and newline characters.
        setCurrentInput(eval(currentInput).toString());
      }
    } catch (error) {
      setCurrentInput('Error');
    }
  };
  

  // Function to clear the display (reset the current input)
  const clearDisplay = () => {
    setCurrentInput('');
  };

  // Function to delete the last character in the current input
  const deleteLast = () => {
    setCurrentInput(currentInput.slice(0, -1));   //Description. The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.
  };



  return (
    <>
      <div className={`${classes['main-calculator']} ${classes[theme]}`} id="calculator">
        <div className={classes['theme-buttons']}>
          <p className={classes['Title']}>calc</p>
           <div className={classes['main-buttons']}>
               <p className={classes['theme']}>THEME</p>
                <div className={classes['Press']}>
                  <button onClick={() => changeTheme('default')} className={classes['first-theme-button']}></button>
                  <button onClick={() => changeTheme('second')} className={classes['second-theme-button']}></button>
                  <button onClick={() => changeTheme('third')} className={classes['third-theme-button']}></button>
                </div>
          </div>
        </div>
            <input type="text" value={currentInput || '0'} className={classes['number-input']} readOnly />
                <br />
                <div className={classes['Calculate-numbers']}>
                      <button onClick={() => appendNumber('7')} className={classes['number-button']}>7</button>
                      <button onClick={() => appendNumber('8')} className={classes['number-button']}>8</button>
                      <button onClick={() => appendNumber('9')} className={classes['number-button']}>9</button>
                      <button onClick={deleteLast} className={classes['reset-delete-button']}>DEL</button>
                      <br />
                      <button onClick={() => appendNumber('4')} className={classes['number-button']}>4</button>
                      <button onClick={() => appendNumber('5')} className={classes['number-button']}>5</button>
                      <button onClick={() => appendNumber('6')} className={classes['number-button']}>6</button>
                      <button onClick={() => setOperatorHandler('+')}className={classes['operator-button']} >+</button>
                      <br />
                      <button onClick={() => appendNumber('1')} className={classes['number-button']}>1</button>
                      <button onClick={() => appendNumber('2')} className={classes['number-button']}>2</button>
                      <button onClick={() => appendNumber('3')} className={classes['number-button']}>3</button>
                      <button onClick={() => setOperatorHandler('-')} className={classes['operator-button']}>-</button>
                      <br />
                      <button onClick={() => appendNumber('0')} className={classes['number-button']}>0</button>
                      <button onClick={() => setOperatorHandler('/')} className={classes['operator-button']}>/</button>
                      <button onClick={() => setOperatorHandler('*')} className={classes['operator-button']}>*</button>
                      <button onClick={() => appendNumber('.')} className={classes['number-button']}>.</button>
                      <br />
                      <div className={classes['extraxted']}>
                        <button onClick={clearDisplay} className={classes['reset-button']}>Reset</button>
                        <button onClick={calculate} className={classes['equals-button']}>=</button>
                      </div>
                    </div>
       </div>
    </>
  );
};

export default App;
