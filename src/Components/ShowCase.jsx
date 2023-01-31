import React from "react";

const ShowCase = ({
  nextStep,
  prevStep,
  currentStep,
  gameStart,
  newQuestion,
}) => {
  return (
    <div className="main-action-page bg-white grid grid-cols-1fr1fr gap-4 p-4 items-center">
      <div className="showcase p-4 bg-sky-500 rounded-xl grid grid-cols-1fr5fr text-right">
        <p className="text-white text-xl">NEXT</p>
        <p className="text-xl text-white">{nextStep}</p>
      </div>
      <div className="showcase p-4 bg-red-400 rounded-xl grid grid-cols-1fr5fr text-right">
        <p className="text-white text-xl">LOSE</p>
        <p className="text-xl text-white">{prevStep}</p>
      </div>
      <div className="showcase p-4 bg-white border-2 border-black rounded-xl grid grid-cols-1fr5fr text-right">
        <p className="text-xl">CURRENT</p>
        <p className="text-xl">{currentStep}</p>
      </div>
      <div>
        <button
          className="purple-btn p-4 disabled:bg-purple-100 disabled:border-none disabled:hover:text-white"
          disabled={gameStart}
          onClick={newQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default ShowCase;
