import React from "react";

const ShowCase = ({ nextStep, prevStep, gameStart, newQuestion }) => {
  return (
    <div>
      <div className="main-action-page  min-h-[25%] bg-white grid grid-cols-1fr1fr gap-4 p-4 items-center">
        <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
          <p className="text-green-500 text-xl">WIN</p>
          <p className="text-xl">{nextStep}</p>
        </div>
        <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
          <p className="text-red-500 text-xl">LOOSE</p>
          <p className="text-xl">{prevStep}</p>
        </div>
        <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
          <p className="text-purple-500 text-xl">QUIT</p>
          <p className="text-xl">{prevStep}</p>
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
    </div>
  );
};

export default ShowCase;
