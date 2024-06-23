import "./styles/final-score.css";
// import {useState } from "react";
export function FunctionalFinalScore({ correctCount, incorrectCount }) {
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
}





