import { useQuize } from "../contexts/QuizeContext";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuize();
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You score <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
