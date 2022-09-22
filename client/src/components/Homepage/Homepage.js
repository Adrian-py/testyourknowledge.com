import React, { useState, useEffect } from "react";

import getQuestions from "../../helper/getQuestions";

import StartMenu from "./StartMenu";
import QuestionMenu from "./QuestionMenu";
import EndMenu from "./EndMenu";

const useHomepage = () => {
  const [questionsList, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    return await getQuestions();
  };

  useEffect(() => {
    fetchQuestions().then((returnedQuestions) => {
      setQuestions(returnedQuestions);
    });
  }, []);

  return { questionsList };
};

export default function Homepage() {
  const { questionsList } = useHomepage();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  const handleGameProgression = (nextEvent) => {
    switch (nextEvent) {
      case "Start":
        setGameStarted(true);
        break;

      case "End":
        setGameEnded(true);
        break;

      case "Reset":
        setGameStarted(false);
        setGameEnded(false);
        setNumOfCorrectAnswers(0);
        break;

      default:
        break;
    }
  };

  return (
    <section className="homepage">
      {!gameStarted ? (
        <StartMenu handleGameProgression={handleGameProgression} />
      ) : gameEnded ? (
        <EndMenu
          numOfCorrectAnswers={numOfCorrectAnswers}
          handleGameProgression={handleGameProgression}
        />
      ) : (
        <QuestionMenu
          questionsList={questionsList}
          numOfCorrectAnswers={numOfCorrectAnswers}
          setNumOfCorrectAnswers={setNumOfCorrectAnswers}
          handleGameProgression={handleGameProgression}
        />
      )}
    </section>
  );
}
