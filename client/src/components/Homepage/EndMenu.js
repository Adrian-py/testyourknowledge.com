import React from "react";

export default function EndMenu({
  numOfCorrectAnswers,
  numOfQuestionsAnswered,
  handleGameProgression,
}) {
  return (
    <section className="end-menu">
      <h2 className="end-menu__title">
        Congratulations! You got{" "}
        <span className="correct">{numOfCorrectAnswers}</span> correct!
      </h2>
      <p className="end-menu__desc">
        You were able to do{" "}
        <span className="bold answered">
          {numOfQuestionsAnswered} questions
        </span>{" "}
        and got <span className="bold correct">{numOfCorrectAnswers}</span>{" "}
        correct! and{" "}
        <span className="bold incorrect">{10 - numOfCorrectAnswers}</span>{" "}
        incorret!
      </p>
      <button
        className="end-menu__reset"
        onClick={() => handleGameProgression("Reset")}
      >
        Try Again
      </button>
    </section>
  );
}
