import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import Header from "./Header";
import { questions } from "./data/questions";
import { RESULTS } from "./data/results";
import { getResultByDistance } from "./utils/getResult";


/* =====================
   App
===================== */
function App() {
  const [step, setStep] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    sweet: 0,
    texture: 0,
  });

  const handleAnswer = (axis, value) => {
    setScores((prev) => ({
      ...prev,
      [axis]: prev[axis] + value,
    }));

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const result =
    step === "result"
      ? getResultByDistance(scores, RESULTS)
      : null;



  const resetApp = () => {
    setStep("start");
    setCurrentQuestion(0);
    setScores({ sweet: 0, texture: 0 });
  };

  return (
    <div className="app">
      <Header
        subtitle={
          step === "start"
            ? "直感で答えて、今食べたいお菓子を診断！"
            : step === "question"
            ? `質問 ${currentQuestion + 1} / ${questions.length}`
            : "診断結果"
        }
      />

      {step === "start" && (
        <div className="start">
          <p>今の気分で深く考えずにポチっと選んでね。</p>
          <button onClick={() => setStep("question")}>
            診断をはじめる
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
        <Result result={result} onRestart={resetApp} />
      )}

    </div>
  );
}

export default App;
