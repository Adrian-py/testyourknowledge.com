const handleSavingGameInfo = (
  questionsList,
  timeLeft,
  currentQuestionNumber,
  numOfCorrectAnswers
) => {
  const gameInformation = {
    questionsList,
    timeLeft,
    currentQuestionNumber,
    numOfCorrectAnswers,
  };
  //   console.log(gameInformation);
  localStorage.setItem("previousGameInfo", JSON.stringify(gameInformation));
};

const handleRetrievingGameInfo = () => {
  return localStorage.getItem("previousGameInfo");
};

const handleDeletingGameInfo = () => {
  localStorage.removeItem("previousGameInfo");
};

export {
  handleSavingGameInfo,
  handleDeletingGameInfo,
  handleRetrievingGameInfo,
};
