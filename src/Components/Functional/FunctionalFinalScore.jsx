import "./styles/final-score.css";

export const FunctionalFinalScore = () => {
  const correctCount = 4;
  const incorrectCount = 0;
  const totalCount = correctCount + incorrectCount;

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
