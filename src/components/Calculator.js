import React, { useState } from 'react';
import CalculatorOperations from './Buttons/CalculatorOperations';
import Numbers from './Buttons/Numbers';
import SimpleOperations from './Buttons/SimpleOperations';
import classes from './Calculator.module.css';
import Input from './Buttons/Input';
import calculate from './logic/calculate';

const Calculator = () => {
  const [currentInnerText, setInnerText] = useState('');
  const [calc, setCalc] = useState({});
  const changeHandler = (e) => {
    const buttonName = e.target.name;
    const newCalc = calculate(calc, buttonName);
    setCalc(newCalc);
    setInnerText(`${newCalc.next ? newCalc.next : ''} ${newCalc.operation ? newCalc.operation : ''} ${newCalc.total ? newCalc.total : ''}`);
  };

  return (
    <div className={classes.container}>
      <Input value={currentInnerText} />
      <CalculatorOperations onclick={changeHandler} />
      <Numbers onclick={changeHandler} />
      <SimpleOperations onclick={changeHandler} />
    </div>
  );
};

export default Calculator;
