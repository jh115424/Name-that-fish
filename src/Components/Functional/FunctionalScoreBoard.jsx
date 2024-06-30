import "./styles/score-board.css";

export const FunctionalScoreBoard = ({
  answersLeft,
  correctCount,
  wrongNumber,
}) => {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {wrongNumber}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer.name} value={wrongNumber} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>
        Correct ✅:
        {correctCount}
      </div>
    </div>
  );
};
