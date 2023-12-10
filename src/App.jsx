import React, { useState } from 'react';
import classes from '../modules/App.module.scss';

const App = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [theme, setTheme] = useState('default');

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

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
      <div className={`${classes['main-calculator']} ${classes[theme]}`} id="calculator">
        <div className={classes['theme-buttons']}>
          <button onClick={() => changeTheme('default')} className={classes['theme-button-blue']}></button>
          <button onClick={() => changeTheme('second')} className={classes['theme-button-gray']}></button>
          <button onClick={() => changeTheme('third')} className={classes['theme-button-purple']}></button>
        </div>
            <input type="text" value={currentInput || '0'} className={classes['number-input']} readOnly />
                <br />
                    <button onClick={() => appendNumber('7')} className={classes['number-button']}>7</button>
                    <button onClick={() => appendNumber('8')} className={classes['number-button']}>8</button>
                    <button onClick={() => appendNumber('9')} className={classes['number-button']}>9</button>
                    <button onClick={() => setOperatorHandler('+')}className={classes['operator-button']} >+</button>
                    <br />
                    <button onClick={() => appendNumber('4')} className={classes['number-button']}>4</button>
                    <button onClick={() => appendNumber('5')} className={classes['number-button']}>5</button>
                    <button onClick={() => appendNumber('6')} className={classes['number-button']}>6</button>
                    <button onClick={() => setOperatorHandler('-')} className={classes['operator-button']}>-</button>
                    <br />
                    <button onClick={() => appendNumber('1')} className={classes['number-button']}>1</button>
                    <button onClick={() => appendNumber('2')} className={classes['number-button']}>2</button>
                    <button onClick={() => appendNumber('3')} className={classes['number-button']}>3</button>
                    <button onClick={() => setOperatorHandler('*')} className={classes['operator-button']}>*</button>
                    <br />
                    <button onClick={() => appendNumber('0')} className={classes['number-button']}>0</button>
                    <button onClick={() => setOperatorHandler('/')} className={classes['operator-button']}>/</button>
                    <button onClick={calculate} className={classes['equals-button']}>=</button>
                    <button onClick={clearDisplay} className={classes['reset-delete-button']}>C</button>
                    <button onClick={deleteLast} className={classes['reset-delete-button']}>DEL</button>
      </div>
    </>
  );
};

export default App;
