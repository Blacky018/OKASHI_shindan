import "./Question.css";

function Question({ question, onAnswer }) {
  return (
    <div className="question">
      <h2>{question.text}</h2>

      <div className="choices">
        {question.choices.map((choice) => (
          <button
            key={choice.label}
            onClick={() => onAnswer(choice.type)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
