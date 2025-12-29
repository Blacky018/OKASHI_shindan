import "./Question.css";

const SCALE = [
  { value: 3, icon: "●●●", label: "左寄り" },
  { value: 2, icon: "●●", label: "" },
  { value: 1, icon: "●", label: "" },
  { value: -1, icon: "●", label: "" },
  { value: -2, icon: "●●", label: "" },
  { value: -3, icon: "●●●", label: "右寄り" },
];

function Question({ question, onAnswer }) {
  return (
    <div className="question">
      <h2 className="question-text">{question.text}</h2>

      <div className="labels">
        <span className="label left">{question.leftLabel}</span>
        <span className="label right">{question.rightLabel}</span>
      </div>

      <div className="scale-buttons">
        {SCALE.map((item, index) => (
          <button
            key={index}
            className="scale-button"
            onClick={() => onAnswer(question.axis, item.value)}
            aria-label={`スケール ${item.value}`}
            title={item.label}
          >
            <span className="scale-icon">{item.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
