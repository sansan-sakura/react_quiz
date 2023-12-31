import { useQuiz } from "../QuizContext";
function FinishedScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  console.log(points, highScore);

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
