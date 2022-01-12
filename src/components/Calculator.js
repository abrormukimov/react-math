import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calc">
        <ul className="ctn">
          <li className="span1 box">0</li>
          <li className="span gray">AC</li>
          <li className="span gray">+/-</li>
          <li className="span gray">%</li>
          <li className="span orange">+</li>
          <li className="span gray">7</li>
          <li className="span gray">8</li>
          <li className="span gray">9</li>
          <li className="span orange">x</li>
          <li className="span gray">4</li>
          <li className="span gray">5</li>
          <li className="span gray">6</li>
          <li className="span orange">-</li>
          <li className="span gray">1</li>
          <li className="span gray">2</li>
          <li className="span gray">3</li>
          <li className="span orange">+</li>
          <li className="span2 gray">0</li>
          <li className="span gray">.</li>
          <li className="span orange">=</li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
