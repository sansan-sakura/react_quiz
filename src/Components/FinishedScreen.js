function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "reStart" })}>
        Start Again
      </button>
    </>
  );
}

export default FinishedScreen;
