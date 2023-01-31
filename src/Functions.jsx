import React, { useState, useEffect } from "react";
import axios from "axios";

const Functions = () => {
  const steps = [
    100, 500, 1000, 2500, 10000, 20000, 50000, 100000, 250000, 500000, 1000000,
  ];
  const stepsA = steps.map((num) => {
    return num.toLocaleString();
  });

  const [gameStart, setGameStart] = useState(false);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState([]);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [currentQsn, setCurrentQsn] = useState({});

  // const [chosenOption, setChosenOption] = useState("");
  // const [step, setStep] = useState();
  // const [questionList, setQuestionList] = useState([]);
  // const [wonAmount, setWonAmount] = useState();
  // const [showEndScreen, setShowEndScreen] = useState(false);
  // const showedQuestions = [];
  const askedQuestions = [];

  useEffect(() => {
    axios
      .get("http://localhost:3300/questions")
      .then((res) => setData(res.data));
  }, []);

  const makeRandQuestion = () => {
    const qsnIndex = Math.floor(Math.random() * data.length);
    return qsnIndex;
  };

  const newQsnHandler = () => {
    setGameStart(true);
    let newQuestion = makeRandQuestion();
    if (!askedQuestions.includes(newQuestion)) {
      askedQuestions.push(newQuestion);
      setQuestion(data[newQuestion]);
    } else {
      newQsnHandler();
    }
  };

  // const startGameHandler = () => {
  //   const questionIndex = Math.floor(Math.random() * data.length);
  //   setQuestion(data[questionIndex]);
  // };

  // const startGameHandler = () => {
  //   const question = Math.floor(Math.random() * 100);
  //   setQuestionList(question);

  //   if (!questionList.includes(question)) {
  //     axios
  //       .get(`http://localhost:3300/questions/${question}`)
  //       .then((res) => setData(res.data));
  //   }
  // };

  // const wrongOptionHandler = () => {
  //   setStep(step);
  //   gameEndHandler();
  // };
  // const correctOptionHandler = () => {
  //   setStep(steps + 1);
  //   startGameHandler();
  // };

  // const gameEndHandler = () => {
  //   setShowEndScreen(true);
  // };

  // // const setShowEndScreen = () => {
  // //   console.log("");
  // // };

  // // clickOptionHandler();

  // // const quitGameHandler = () => {
  // //   setStep(step);
  // //   gameEndHandler();
  // // };

  // // const restartGameHandler = () => {
  // //   setStep(0);
  // //   setData([]);
  // //   setChosenOption("");
  // //   setShowEndScreen(false);
  // // };

  // const answerClickHandler = (e) => {
  //   if (question.correctIndex !== e.target.value) {
  //     alert("Sorry, the answer is wrong.");
  //   } else {
  //     alert("Congratulations. You answered right.");
  //     setCurrentStep((prevIndex) => {
  //       if (prevIndex > 0) {
  //         return prevIndex + 1;
  //       }
  //     });
  //     console.log(currentStep);
  //   }
  // };

  return (
    <div className="min-h-[100vh] rounded-md">
      <div className="action-bar bg-cyan-600 h-24 p-4 flex justify-center gap-6">
        <button className="primary-btn" onClick={newQsnHandler}>
          Start Game
        </button>
        <button className="primary-btn">Take Break</button>
        <button className="red-btn">Quit Game</button>
      </div>

      <div className="main-page grid grid-cols-2fr1fr">
        <div className="grid-left bg-emerald-600 flex flex-col gap-4">
          <div className="main-action-page  min-h-[25%] bg-white grid grid-cols-1fr1fr gap-4 p-4 items-center">
            <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
              <p className="text-green-500 text-xl">WIN</p>
              <p className="text-xl">100,000</p>
            </div>
            <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
              <p className="text-red-500 text-xl">LOOSE</p>
              <p className="text-xl">25,000</p>
            </div>
            <div className="showcase p-4 bg-slate-200 rounded-xl grid grid-cols-1fr5fr text-center">
              <p className="text-purple-500 text-xl">QUIT</p>
              <p className="text-xl">25,000</p>
            </div>
            <div>
              <button className="purple-btn p-4">Next Question</button>
            </div>
          </div>
          {gameStart && (
            <div className="question-section px-6 py-12">
              <p className="border border-white p-4 h-[100px] text-white text-center text-xl rounded-full">
                {question.question}
              </p>
              <div className="grid grid-cols-2 gap-3 my-8">
                <button
                  className="block border-2 border-white text-white py-4 px-5 text-xl rounded-full shadow-md"
                  key={question.A}
                >
                  A.&nbsp;{question.A}
                </button>
                <button
                  className="block border-2 border-white text-white py-4 px-5 text-xl rounded-full shadow-md"
                  key={question.B}
                >
                  B.&nbsp;{question.B}
                </button>
                <button
                  className="block border-2 border-white text-white py-4 px-5 text-xl rounded-full shadow-md"
                  key={question.C}
                >
                  C. &nbsp;{question.C}
                </button>
                <button
                  className="block border-2 border-white text-white py-4 px-5 text-xl rounded-full shadow-md"
                  key={question.D}
                >
                  D.&nbsp;{question.D}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="grid-right bg-slate-400 p-4">
          <ul className="text-white text-center flex flex-col gap-2">
            {stepsA.reverse().map((step, i) => {
              return (
                <li
                  className="p-2 bg-white text-slate-500 text-lg rounded-full"
                  key={step}
                >
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Functions;
