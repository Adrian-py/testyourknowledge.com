import React from "react";

export default function EndMenu({
  numOfCorrectAnswers,
  handleGameProgression,
}) {
  return (
    <section className="end-menu">
      <h2 className="end-menu__title">
        Congratulations! You got {numOfCorrectAnswers}/10
      </h2>

      <button
        className="end-menu__reset"
        onClick={() => handleGameProgression("Reset")}
      >
        Try Again
      </button>
    </section>
  );
}
