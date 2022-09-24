import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import getQuestions from "../helper/getQuestions";

import Header from "../components/Header";
import StartMenu from "../components/Homepage/StartMenu";
import QuestionMenu from "../components/Homepage/QuestionMenu";
import EndMenu from "../components/Homepage/EndMenu";
import Loader from "../components/Homepage/Loader";

import { useNavigate } from "react-router-dom";
import {
  handleDeletingGameInfo,
  handleRetrievingGameInfo,
} from "../helper/resumeGame";

const useHomepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questionsList, setQuestionsList] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const [numOfQuestionsAnswered, setNumOfQuestionsAnswered] = useState(0);

  const navigatePage = useNavigate();

  // Fetch trivia questions
  const fetchQuestions = async () => {
    setIsLoading(true);
    return await getQuestions();
  };

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
        navigatePage("/login");
      } else {
        if (handleRetrievingGameInfo()) {
          setIsLoading(false);
          return;
        }

        fetchQuestions().then((returnedQuestions) => {
          setQuestionsList(returnedQuestions);
          setIsLoading(false);
        });
      }
    } else {
      alert("You need to login first!");
      navigatePage("/login");
    }
  }, [navigatePage]);

  // Function to move game stages
  const handleGameProgression = (nextEvent) => {
    switch (nextEvent) {
      case "Start":
        setGameStarted(true);
        break;

      case "End":
        handleDeletingGameInfo();
        setGameEnded(true);
        break;

      case "Reset":
        fetchQuestions().then((returnedQuestions) => {
          setQuestionsList([...returnedQuestions]);
          setIsLoading(false);
        });
        setGameStarted(false);
        setGameEnded(false);
        setNumOfCorrectAnswers(0);
        setNumOfQuestionsAnswered(0);
        break;

      default:
        break;
    }
  };

  // Check if there is previous game
  useEffect(() => {
    const previousGameInfo = JSON.parse(handleRetrievingGameInfo());

    if (previousGameInfo) {
      setQuestionsList(previousGameInfo.questionsList);
      setNumOfCorrectAnswers(previousGameInfo.numOfCorrectAnswers);
      setNumOfQuestionsAnswered(previousGameInfo.currentQuestionNumber);
    }
  }, []);

  return {
    isLoading,
    gameStarted,
    gameEnded,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
    numOfQuestionsAnswered,
    setNumOfQuestionsAnswered,
    questionsList,
    handleGameProgression,
  };
};

export default function Homepage() {
  const {
    isLoading,
    gameStarted,
    gameEnded,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
    numOfQuestionsAnswered,
    setNumOfQuestionsAnswered,
    questionsList,
    handleGameProgression,
  } = useHomepage();

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : null}
      <section className="homepage">
        {!gameStarted ? (
          <StartMenu handleGameProgression={handleGameProgression} />
        ) : gameEnded ? (
          <EndMenu
            numOfCorrectAnswers={numOfCorrectAnswers}
            numOfQuestionsAnswered={numOfQuestionsAnswered}
            handleGameProgression={handleGameProgression}
          />
        ) : (
          <QuestionMenu
            questionsList={questionsList}
            numOfCorrectAnswers={numOfCorrectAnswers}
            setNumOfCorrectAnswers={setNumOfCorrectAnswers}
            numOfQuestionsAnswered={numOfQuestionsAnswered}
            setNumOfQuestionsAnswered={setNumOfQuestionsAnswered}
            handleGameProgression={handleGameProgression}
          />
        )}
      </section>
    </>
  );
}
