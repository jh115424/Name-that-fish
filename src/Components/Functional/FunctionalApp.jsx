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
    // const { index, incorrectCount, correctCount } = state;
    initialFishes[index].name === fishNames
      ? setState({
          correctCount: correctCount + 1,
          index: index + 1,
        })
      : setState({
          incorrectCount: incorrectCount + 1,
          index: index + 1,
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
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          totalCount={correctCount + incorrectCount}
        />
      )}
    </>
  );
}
