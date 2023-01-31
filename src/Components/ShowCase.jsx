import React from "react";

const ShowCase = ({
  nextStep,
  prevStep,
  currentStep,
  disableSwipe,
  newQuestion,
}) => {
  return (
    <div className="main-action-page bg-white grid grid-cols-1fr1fr gap-4 p-4 items-center">
      <div className="showcase p-4 bg-white border-2 border-green-500 rounded-xl grid grid-cols-1fr5fr">
        <p className="text-xl text-left text-green-500">Correct</p>
        <p className="text-xl text-right text-green-500">{currentStep}</p>
      </div>
      <div className="showcase p-4 border-2 border-sky-500 rounded-xl grid grid-cols-1fr5fr">
        <p className="text-sky-500 text-xl text-left">Next</p>
        <p className="text-xl text-sky-500 text-right">{nextStep}</p>
      </div>
      <div className="showcase p-4 bg-white border-2 border-red-400 rounded-xl grid grid-cols-1fr5fr">
        <p className="text-red-400 text-xl text-left">Wrong</p>
        <p className="text-xl text-red-400 text-right">{prevStep}</p>
      </div>

      <div>
        <button
          className="purple-btn p-4 disabled:bg-purple-100 disabled:border-none disabled:hover:text-white"
          disabled={disableSwipe}
          onClick={newQuestion}
        >
          SWIPE QUESTION
        </button>
      </div>
    </div>
  );
};

export default ShowCase;
