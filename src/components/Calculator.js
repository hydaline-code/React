// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './Calculator.css';

// const Calculator = () => {
//   const [displayValue] = useState('0');

//   const handleButtonClick = () => {

//   };

//   const buttonRows = [
//     ['AC', '+/-', '%', '÷'],
//     ['7', '8', '9', '×'],
//     ['4', '5', '6', '-'],
//     ['1', '2', '3', '+'],
//     ['0', '.', '='],
//   ];
//   return (
//     <div className="calculator">
//       <div className="display">{displayValue}</div>
//       <div className="buttons">
//         {buttonRows.map((row, rowIndex) => (
//           <div className="row" key={uuidv4()}>
//             {row.map((button, columnIndex) => {
//               let buttonClass = '';

//               if (button === '0' && columnIndex === 0) {
//                 buttonClass = 'wide';
//               } else if (columnIndex === row.length - 1) {
//                 buttonClass = 'color';
//               }
//               const buttonId = `button-${rowIndex}-${columnIndex}`;
//               return (
//                 <button
//                   key={buttonId}
//                   type="button"
//                   onClick={() => handleButtonClick(button)}
//                   className={buttonClass}
//                 >
//                   {button}
//                 </button>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Calculator.css';

const Calculator = () => {
  const [displayValue] = useState('0');

  const handleButtonClick = () => {

  };

  const CalculatorButtons = ({ value, onClick, className }) => (
    <button type="button" onClick={onClick} className={className}>
      {value}
    </button>
  );

  const buttonRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttonRows.map((row, rowIndex) => (
          <div className="row" key={uuidv4()}>
            {row.map((button, columnIndex) => {
              let buttonClass = '';

              if (button === '0' && columnIndex === 0) {
                buttonClass = 'wide';
              } else if (columnIndex === row.length - 1) {
                buttonClass = 'color';
              }

              const buttonId = `button-${rowIndex}-${columnIndex}`;

              return (
                <CalculatorButtons
                  key={buttonId}
                  value={button}
                  onClick={() => handleButtonClick(button)}
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
