import "./styles/score-board.css";
import { useState } from "react";



const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard() {
 const [correctCount, incorrectCount] = useState(0);


  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
  
        
         

  







