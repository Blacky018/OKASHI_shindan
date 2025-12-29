import "./Result.css"

function Result({ result, onRestart }) {
  return (
    <div className="result">
      <h2>{result.title}</h2>
      <p>{result.description}</p>

      <button className="restart-button" onClick={onRestart}>
      もう一度診断する
      </button>
    </div> 
  )
}

export default Result;
