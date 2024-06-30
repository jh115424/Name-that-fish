import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp({ initialFishes }) {
  const [state, setState] = useState({
    wrongNumber: 0,
    correctCount: 0,
    index: 0,
  });

  const nextFishToHandleAnswer = (fishNames) => {

    initialFishes[state.index].name.toLowerCase() === fishNames.toLowerCase()
      ? setState({
          ...state,
          correctCount: state.correctCount + 1,
          index: state.index + 1,
        })
      : setState({
          ...state,
          wrongNumber: state.wrongNumber + 1,
          index: state.index + 1,
        });
  };
  const { wrongNumber, correctCount } = state;

  const index = correctCount + wrongNumber;
  const answersLeftArr = initialFishes.slice(index);


  return (
    <>
      {answersLeftArr.length > 0 ? (
        <>
          <FunctionalScoreBoard
            wrongNumber={wrongNumber}
            correctCount={correctCount}
            answersLeft={answersLeftArr}
        
          />
          <FunctionalGameBoard
            nextFishToHandleAnswer={nextFishToHandleAnswer}
            index={index}
            initialFishes={initialFishes}


          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          wrongNumber={wrongNumber}
        
        />
      )}
    </>
  );
}

