import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionOptions from "./QuestionOptions";
import ShowCase from "./ShowCase";
import BreakPage from "./BreakPage";
import GreetPage from "./GreetPage";

const Home = () => {
  const steps = [
    100, 500, 1000, 2500, 10000, 20000, 50000, 100000, 250000, 500000, 1000000,
  ];

  const [gameStart, setGameStart] = useState(false);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({});
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(steps[index]);
  const [correctQsn, setCorrectQuestion] = useState("");

  const [onBreak, setOnBreak] = useState(false);
  const [onWin, setOnWin] = useState(false);
  const [onLose, setOnLose] = useState(false);

  // const [chosenOption, setChosenOption] = useState("");
  // const [step, setStep] = useState();
  // const [questionList, setQuestionList] = useState([]);
  // const [wonAmount, setWonAmount] = useState();
  // const [showEndScreen, setShowEndScreen] = useState(false);
  // const showedQuestions = [];

  useEffect(() => {
    axios
      .get("http://localhost:3300/questions")
      .then((res) => setData(res.data));
  }, []);

  const makeRandQuestion = () => {
    const qsnIndex = Math.floor(Math.random() * data.length);
    return qsnIndex;
  };

  const newQsnHandler = (i) => {
    setGameStart(true);
    let newQuestion = makeRandQuestion();
    if (!askedQuestions.includes(newQuestion)) {
      setAskedQuestions((current) => [...current, newQuestion]);
      setQuestion(data[newQuestion]);
    } else {
      newQsnHandler();
    }
  };

  const answersClickHandler = (e) => {
    if (e.target.value !== question.answer) {
      setOnLose(true);
    } else {
      setIndex((prev) => (prev + 1) % steps.length);
      setCurrentStep(steps[index]);
      showWinPageHandler();
    }
  };

  const showBreakPageHandler = () => {
    setOnBreak(!onBreak);
  };

  const showWinPageHandler = () => {
    setOnWin(!onWin);
    newQsnHandler();
  };

  const showLostPageHandler = () => {
    setOnLose(!onLose);
    window.location.reload();
  };

  return (
    <div className="min-h-[100vh] my-[20px] rounded-md relative">
      {onBreak && <BreakPage toggleBreak={showBreakPageHandler} />}
      {onWin && (
        <GreetPage
          greetText={"Congratulations!! You won"}
          amount={steps[index - 1]}
          toggleWin={showWinPageHandler}
        />
      )}
      {onLose && (
        <GreetPage
          greetText={"Sorry!! You lost this time."}
          amount={steps[index - 1]}
          toggleWin={showLostPageHandler}
        />
      )}
      <div className="action-bar bg-slate-800 h-24 p-4 flex justify-center gap-6 disabled:bg-slate-400 rounded-full">
        <button
          className="primary-btn bg-green-500 disabled:bg-slate-400"
          onClick={newQsnHandler}
          disabled={gameStart}
        >
          Start Game
        </button>
        <button
          className="primary-btn text-black bg-slate-200"
          onClick={showBreakPageHandler}
        >
          Take Break
        </button>
        <button className="red-btn">Quit Game</button>
      </div>

      <div className="main-page grid grid-cols-3fr1fr gap-4">
        <div className="grid-left bg-slate-800 flex flex-col gap-4 rounded-xl">
          <ShowCase
            nextStep={steps[index + 1]}
            prevStep={steps[index - 1]}
            currentStep={steps[index]}
            gameStart={!gameStart}
            newQuestion={newQsnHandler}
          />
          {gameStart && (
            <QuestionOptions
              question={question.question}
              optionA={question.A}
              optionB={question.B}
              optionC={question.C}
              optionD={question.D}
              clickAnswer={answersClickHandler}
            />
          )}
        </div>
        <div className="grid-right self-stretch p-3">
          <ul className="text-white text-center flex flex-col">
            {steps.reverse().map((step, i) => {
              return (
                <li
                  className={
                    "text-md p-2 my-1 bg-white text-slate-800 border-2 border-slate-800 rounded-lg shadow-sm active:bg-white active:text-slate-800"
                  }
                  key={step}
                >
                  {step.toLocaleString()}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

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
