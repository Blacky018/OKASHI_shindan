import "./Result.css"

function Result({ result , onRestart}) {
  return (
    <div className="result">
    <h2>あなたにおすすめのお菓子は {result}</h2>

      <button className="restart-button" onClick={onRestart}>
      もう一度診断する
      </button>
    </div> 
  )
}

export default Result;
