import React from "react";

const QuestionOptions = ({
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  clickAnswer,
}) => (
  <div className="question-section px-6 py-12">
    <p className="border-2 border-white p-4 h-[100px] text-white text-center text-xl rounded-full">
      {question}
    </p>
    <div className="grid grid-cols-2 gap-3 my-8">
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-full shadow-md"
        key={optionA}
        value="A"
        onClick={clickAnswer}
      >
        A.&nbsp;{optionA}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-full shadow-md"
        key={optionB}
        value="B"
        onClick={clickAnswer}
      >
        B.&nbsp;{optionB}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-full shadow-md"
        key={optionC}
        value="C"
        onClick={clickAnswer}
      >
        C. &nbsp;{optionC}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-full shadow-md"
        key={optionD}
        value="D"
        onClick={clickAnswer}
      >
        D.&nbsp;{optionD}
      </button>
    </div>
  </div>
);

export default QuestionOptions;
