import React from "react";

const QuestionOptions = ({
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  clickAnswer,
  correctQsn,
}) => (
  <div className="question-section p-8">
    <p className="border-2 border-white p-3 h-[120px] flex items-center justify-center text-white text-center text-2xl rounded-xl">
      {question}
    </p>
    <div className="grid grid-cols-2 gap-4 mt-12">
      <button
        className="block border-2 text-white py-4 px-5 text-xl text-left capitalize rounded-xl shadow-md"
        key={optionA}
        value="A"
        onClick={clickAnswer}
      >
        A.&nbsp;{optionA}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize shadow-md rounded-xl"
        key={optionB}
        value="B"
        onClick={clickAnswer}
      >
        B.&nbsp;{optionB}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-xl shadow-md"
        key={optionC}
        value="C"
        onClick={clickAnswer}
      >
        C. &nbsp;{optionC}
      </button>
      <button
        className="block border-2 border-white text-white py-4 px-5 text-xl text-left capitalize rounded-xl shadow-md"
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
