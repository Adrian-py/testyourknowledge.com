import React, { useState } from "react";

import he from "he";

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

  // Check correct answers
  const handleQuestionAnswer = (event) => {
    event.preventDefault();

    setNumOfQuestionsAnswered(numOfQuestionsAnswered + 1);
    let correctAnswer = questionsList[currentQuestionNumber].correct_answer;
    setNumOfCorrectAnswers(
      numOfCorrectAnswers + (event.target.value === correctAnswer ? 1 : 0)
    );

    if (currentQuestionNumber === questionsList.length - 1) {
      handleGameProgression("End");
      return;
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  return { currentQuestionNumber, handleQuestionAnswer };
};

export default function QuestionMenu({
  questionsList,
  numOfCorrectAnswers,
  setNumOfCorrectAnswers,
  numOfQuestionsAnswered,
  setNumOfQuestionsAnswered,
  handleGameProgression,
}) {
  const { currentQuestionNumber, handleQuestionAnswer } = useQuestionMenu({
    questionsList,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
    numOfQuestionsAnswered,
    setNumOfQuestionsAnswered,
    handleGameProgression,
  });

  return (
    <>
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
