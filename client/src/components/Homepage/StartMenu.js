import React, { useEffect } from "react";

import { handleRetrievingGameInfo } from "../../helper/resumeGame";

export default function StartMenu({ handleGameProgression }) {
  useEffect(() => {
    const previousGameInfo = handleRetrievingGameInfo();

    if (previousGameInfo) handleGameProgression("Start");
  }, [handleGameProgression]);

  return (
    <div className="start-menu">
      <h2 className="start-menu__title">Welcome to testyourknowledge.com!</h2>
      <p className="start-menu__desc">
        Test your general knowledge by answering some questions!
      </p>

      <button
        className="start-menu__start"
        onClick={() => handleGameProgression("Start")}
      >
        Start Quiz
      </button>
    </div>
  );
}
