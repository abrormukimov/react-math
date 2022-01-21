import { useState } from 'react';
import Row from './Row';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({});
  const { next, total } = calcObj;

  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const handleCalc = (e) => {
    const buttonName = e.target.textContent;
    const newState = calculate(calcObj, buttonName);
    setCalcObj(Object.assign(newState));
  };

  return (
    <div id="calculator">
      <div id="display-calc">
        {(next == null) ? total : next}
      </div>

      <div id="calc-buttons">
        {buttons.map((row) => (
          <Row key={row} rowButtons={row} handleCalc={() => handleCalc} />
        ))}
      </div>
    </div>

  );
};

export default Calculator;
