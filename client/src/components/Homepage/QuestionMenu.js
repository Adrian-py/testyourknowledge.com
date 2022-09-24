import React, { useEffect, useState } from "react";

import he from "he";

import Timer from "./Timer";

import {
  handleRetrievingGameInfo,
  handleSavingGameInfo,
} from "../../helper/resumeGame";

const useQuestionMenu = ({
  questionsList,
  numOfCorrectAnswers,
  setNumOfCorrectAnswers,
  numOfQuestionsAnswered,
  setNumOfQuestionsAnswered,
  handleGameProgression,
}) => {
  // States
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  // Check correct answers
  const handleQuestionAnswer = (event) => {
    event.preventDefault();

    setNumOfQuestionsAnswered(numOfQuestionsAnswered + 1);
    let correctAnswer = questionsList[currentQuestionNumber].correct_answer;
    setNumOfCorrectAnswers(
      numOfCorrectAnswers + (event.target.value === correctAnswer ? 1 : 0)
    );

    handleSavingGameInfo(
      questionsList,
      timeLeft,
      currentQuestionNumber + 1,
      numOfCorrectAnswers + (event.target.value === correctAnswer ? 1 : 0)
    );

    // End game if last question is reached
    if (currentQuestionNumber === questionsList.length - 1) {
      handleGameProgression("End");
      return;
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  // Start and check timer
  useEffect(() => {
    if (!timeLeft) {
      handleGameProgression("End");
      return;
    }

    const timeInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timeLeft, setTimeLeft, handleGameProgression]);

  useEffect(() => {
    const previousGameInfo = JSON.parse(handleRetrievingGameInfo());

    if (previousGameInfo) {
      setTimeLeft(previousGameInfo.timeLeft);
      setCurrentQuestionNumber(previousGameInfo.currentQuestionNumber);
    }
  }, []);

  return { timeLeft, currentQuestionNumber, handleQuestionAnswer };
};

export default function QuestionMenu({
  questionsList,
  numOfCorrectAnswers,
  setNumOfCorrectAnswers,
  numOfQuestionsAnswered,
  setNumOfQuestionsAnswered,
  handleGameProgression,
}) {
  const { timeLeft, currentQuestionNumber, handleQuestionAnswer } =
    useQuestionMenu({
      questionsList,
      numOfCorrectAnswers,
      setNumOfCorrectAnswers,
      numOfQuestionsAnswered,
      setNumOfQuestionsAnswered,
      handleGameProgression,
    });

  return (
    <>
      <Timer timeLeft={timeLeft} />

      <div className="question">
        <h1 className="question__title">
          Question {currentQuestionNumber + 1}/10
        </h1>
        <p className="question__question">
          {he.decode(questionsList[currentQuestionNumber].question)}
        </p>

        <div className="options">
          <button
            className="options__option"
            value="True"
            onClick={handleQuestionAnswer}
          >
            True
          </button>
          <button
            className="options__option"
            value="False"
            onClick={handleQuestionAnswer}
          >
            False
          </button>
        </div>
      </div>
    </>
  );
}
