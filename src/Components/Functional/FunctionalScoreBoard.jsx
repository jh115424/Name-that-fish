//  Where the score is presented

import "./styles/score-board.css";

export const FunctionalScoreBoard = ({
  answersLeft,
  correctCount,
  incorrectCount,
}) => {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} value={incorrectCount} className="choice">
            {answer}
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
