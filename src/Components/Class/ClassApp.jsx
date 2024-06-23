import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard, initialFishes } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,

    index: 0,
  };

  nextFishToHandleAnswer = (fishNames) => {
    const { index, incorrectCount, correctCount } = this.state;
    initialFishes[index].name === fishNames
      ? this.setState({
          correctCount: correctCount + 1,
          index: index + 1,
        })
      : this.setState({
          incorrectCount: incorrectCount + 1,
          index: index + 1,
        });
  };

  render() {
    const { incorrectCount, correctCount } = this.state;
    const index = correctCount + incorrectCount;
    const answersLeftArr = initialFishes.slice(index).map((fish) => fish.name);

    return (
      <>
        {answersLeftArr.length > 0 ? (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeftArr}
            />

            <ClassGameBoard
              nextFishToHandleAnswer={this.nextFishToHandleAnswer}
              index={index}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
   
      </>
    );
  }
}
