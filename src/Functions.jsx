import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionOptions from "./Components/questionOptions";
import ShowCase from "./Components/ShowCase";

const Functions = () => {
  const steps = [
    100, 500, 1000, 2500, 10000, 20000, 50000, 100000, 250000, 500000, 1000000,
  ];
  const stepsA = steps.map((num) => {
    return num.toLocaleString();
  });

  const [gameStart, setGameStart] = useState(false);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({});
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(steps[0]);

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

  const newQsnHandler = () => {
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
      return;
    } else newQsnHandler();
  };

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

  return (
    <div className="min-h-[100vh] rounded-md">
      <div className="action-bar bg-slate-800 h-24 p-4 flex justify-center gap-6 disabled:bg-slate-400">
        <button
          className="primary-btn disabled:bg-slate-400 disabled:text-white"
          onClick={newQsnHandler}
          disabled={gameStart}
        >
          Start Game
        </button>
        <button className="primary-btn">Take Break</button>
        <button className="red-btn">Quit Game</button>
      </div>

      <div className="main-page grid grid-cols-2fr1fr">
        <div className="grid-left bg-slate-800 flex flex-col gap-4">
          <ShowCase gameStart={!gameStart} newQuestion={newQsnHandler} />
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
