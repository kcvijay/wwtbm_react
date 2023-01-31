import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionOptions from "./QuestionOptions";
import ShowCase from "./ShowCase";
import BreakPage from "./BreakPage";
import GreetPage from "./GreetPage";
import Header from "./Header";

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
  const [nextStep, setNextStep] = useState(steps[index + 1]);

  const [onBreak, setOnBreak] = useState(false);
  const [onWin, setOnWin] = useState(false);
  const [onLose, setOnLose] = useState(false);

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
      <Header
        newQsnHandler={newQsnHandler}
        gameStart={gameStart}
        showBreakPageHandler={showBreakPageHandler}
      />

      <div className="main-page grid grid-cols-3fr1fr gap-4">
        <div className="grid-left bg-slate-800 flex flex-col gap-4 rounded-xl">
          <ShowCase
            nextStep={nextStep}
            currentStep={currentStep}
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
