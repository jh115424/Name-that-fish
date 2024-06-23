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
// pass down handleFishAnswers to gameBoard component
// pass down index to gameBoard component
// pass down correctCount and incorrectCount to scoreBoard component
// pass down correctCount and incorrectCount to finalScore component
// when hitting submit button invoke handleFishAnswers
// if correctCount + incorrectCount === 4, invoke showTheResults
//incorrect and correct has to be passed down to classScoreBoard
// index has to be passed down to classGameBoard
// if userInput puts in mae it does not matter if it is upper case or lower case
