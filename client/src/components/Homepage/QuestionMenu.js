import React, { useState } from "react";

import he from "he";

export default function QuestionMenu({
  questionsList,
  numOfCorrectAnswers,
  setNumOfCorrectAnswers,
  handleGameProgression,
}) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const handleQuestionAnswer = (e) => {
    let correctAnswer = questionsList[currentQuestionNumber].correct_answer;
    setNumOfCorrectAnswers(
      numOfCorrectAnswers + (e.target.value === correctAnswer ? 1 : 0)
    );

    if (currentQuestionNumber === questionsList.length - 1) {
      handleGameProgression("End");
      return;
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    e.preventDefault();
  };

  return (
    <div className="question">
      <h1 className="question__title">Question {currentQuestionNumber}/10</h1>
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
  );
}
