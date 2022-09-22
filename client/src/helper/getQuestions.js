import axios from "axios";

const getQuestions = async () => {
  return await axios
    .request({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean",
    })
    .then((res) => res.data.results);
};

export default getQuestions;
