import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const initialFishes = ["trout", "salmon", "tuna", "shark"];
  const [state, setState] = useState({
    incorrectCount: 0,
    correctCount: 0,
    index: 0,
  });

  const nextFishToHandleAnswer = (fishNames) => {
    initialFishes[state.index].name === fishNames
      ? setState({
          ...state,
          correctCount: state.correctCount + 1,
          index: state.index + 1,
        })
      : setState({
          ...state,
          incorrectCount: state.incorrectCount + 1,
          index: state.index + 1,
        });
  };
  const { incorrectCount, correctCount } = state;

  const index = correctCount + incorrectCount;

  const answersLeftArr = initialFishes.slice(index).map((fish) => fish);

  return (
    <>
      {answersLeftArr.length > 0 ? (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeftArr}
          />
          <FunctionalGameBoard
            nextFishToHandleAnswer={nextFishToHandleAnswer}
            index={index}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            setState={setState}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          answersLeft={answersLeftArr}
        />
      )}
    </>
  );
}
