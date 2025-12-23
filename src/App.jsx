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

const resetApp = () => {
  setStep("start");
  setCurrentQuestion(0);
  setAnswers([]);
};

function App() {
  const [step, setStep] = useState("start"); // start | question | result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (type) => {
    setAnswers([...answers, type]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

const resetApp = () => {
  setStep("start");
  setCurrentQuestion(0);
  setAnswers([]);
};

  const getResult = () => {
    if (answers.includes("sweet") && answers.includes("soft")) {
      return "チョコレートケーキ 🍫";
    } else if (answers.includes("salty") && answers.includes("crispy")) {
      return "ポテトチップス 🥔";
    } else if (answers.includes("sweet") && answers.includes("crispy")) {
      return "オレオ 🍪";
    } else if (answers.includes("salty") && answers.includes("soft")) {
      return "そんなもんねーーよ！！！！";
    }
    return "不明";
  };

  return (
    <div className="app">
      <Header
  subtitle={
    step === "start"
      ? "簡単な質問であなたに合うお菓子を診断！"
      : step === "question"
      ? "質問に答えてください"
      : "診断結果"
  }
      />


      {step === "start" && (
        <div className="start">
          <p>簡単な質問に答えて、あなたにぴったりなお菓子を診断します。</p>
          <button onClick={() => setStep("question")}>
            診断を開始する
          </button>
        </div>
      )}

      {step === "question" && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}

      {step === "result" && (
      <Result result={getResult()} onRestart={resetApp} />
      )}

    </div>
  );
}

export default App;