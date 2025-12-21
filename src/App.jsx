import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import Header from "./Header";


const questions = [
  {
    text: "甘いのとしょっぱいの、どっちが好き？",
    choices: [
      { label: "甘い", type: "sweet" },
      { label: "しょっぱい", type: "salty" }
    ]
  },
  {
    text: "食感は？",
    choices: [
      { label: "サクサク", type: "crispy" },
      { label: "しっとり", type: "soft" }
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type) => {
    setAnswers([...answers, type]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (answers.includes("sweet") && answers.includes("soft")) {
      return "チョコレートケーキ 🍫";
    } else if (answers.includes("salty") && answers.includes("crispy")) {
      return "ポテトチップス 🥔";
    } else if (answers.includes("sweet") && answers.includes("crispy")) {
      return "オレオ"
    } else if(answers.includes("salty") && answers.includes("soft")) {
      return "そんなもんねーーよ！！！！";
    };
  }

  return (

    <div className="app">
      <Header />
      {!showResult ? (
        <Question
          question={questions[currentQuestion]} 
          onAnswer={handleAnswer}
        />
      ) : (
        <Result result={getResult()} />
      )}
    </div>
  );
};

export default App;
