import React from "react";

// react functional components
const OperationButton = ({
  button,
  operand,
  setOperand,
  operator,
  setOperator,
  setEquation,
}) => {
  const handleOperationButtonClick = () => {
    // Show button clink
    console.log("Operation Button", button);
    if (operand !== null && operator === null) {
      setOperator(button);
      setEquation((prev) => `${prev} ${button}`);
      setOperand(null);
    }
  };

  return (
    <button
      onClick={handleOperationButtonClick}
      className="hover:scale-105 active:scale-100 h-12 min-w-1/3 flex items-center justify-center text-white text-4xl hover:bg-gradient-to-br bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 rounded-md"
    >
      {button === "*" ? "x" : button === "/" ? "÷" : button}
    </button>
  );
};

export default OperationButton;
