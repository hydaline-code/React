import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (value) => {
    setCalculatorData((prevData) => {
      const newData = calculate(prevData, value);
      const { total, next, operation } = newData;
      const newDisplayValue = next || total || '0';
      setDisplayValue(newDisplayValue);
      return newData;
    });
  };
  const CalculatorButtons = ({ value, className }) => (
    <button type="button" onClick={() => handleButtonClick(value)} className={className}>
      {value}
    </button>
  );

  const buttonRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttonRows.map((row) => (
          <div className="row" key={uuidv4()}>
            {row.map((button, columnIndex) => {
              let buttonClass = '';

              if (button === '0' && columnIndex === 0) {
                buttonClass = 'wide';
              } else if (columnIndex === row.length - 1) {
                buttonClass = 'color';
              }

              const buttonId = `button-${button}`;

              return (
                <CalculatorButtons
                  key={buttonId}
                  value={button}
                  className={buttonClass}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
