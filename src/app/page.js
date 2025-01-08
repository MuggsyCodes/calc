"use client";

import React, { useState, useEffect } from "react"; //useState is essentially a method

import Display from "@/components/Display";
import NumberButton from "@/components/NumberButton";
import OperationButton from "@/components/OperationButton";

export default function Home() {
  // operand is variable name | setOperand is setter?
  const [operand, setOperand] = useState(null); // useState is a hook - create variable that we read and we can reset
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState(null);
  const [equation, setEquation] = useState("");

  const numberButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "00",
    ".",
  ];

  const operationButtons = ["+", "-", "*", "/"];

  useEffect(() => {
    console.log("A change happened.");
    if (operand !== null) {
      setDisplay(operand);
    } else if (operator !== null) {
      setDisplay(operator);
    }
  }, [operand, operator]);

  const clear = () => {
    setOperand(null);
    setOperator(null);
    setDisplay(null);
    setEquation("");
  };

  const calculate = () => {
    const answer = eval(equation);
    setDisplay(answer);
    setEquation(String(answer));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
      <div className="flex flex-col bg-gradient-to-bl from-black via-gray-800 to-black w-[400px] h-fit rounded-xl p-6 gap-6 shadow-lg shadow-black/50">
        <Display display={display} equation={equation} />
        <div className="flex flex-row w-full gap-4">
          <div className="w-2/3 grid grid-cols-3 gap-2">
            {numberButtons.map((button) => (
              <NumberButton
                operand={operand}
                setOperand={setOperand}
                operator={operator}
                setOperator={setOperator}
                setEquation={setEquation}
                key={button}
                button={button}
              />
            ))}
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            {operationButtons.map((button) => (
              <OperationButton
                operand={operand}
                setOperand={setOperand}
                operator={operator}
                setOperator={setOperator}
                setEquation={setEquation}
                key={button}
                button={button}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => clear()}
            className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 rounded-lg h-12 text-white"
          >
            Clear
          </button>
          <button
            onClick={calculate}
            className="w-1/2 hover:scale-105 active:scale-100 hover:bg-gradient-to-br bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-lg h-12 text-white"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
