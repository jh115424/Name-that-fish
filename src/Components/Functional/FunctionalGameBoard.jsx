import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];
// destructuring // what doe we need to also pass down from the parent so that we can access and update state in the parent?
export function FunctionalGameBoard(props) {
  const [userInput, setUserInput] = useState(""); // where are we tracking the user guess and where do we need it to go on click? 

  const { correctCount, incorrectCount, index, fishGuess, nextFishToHandleAnswer, setState } = props;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[index].url} alt={initialFishes[index].name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
           nextFishToHandleAnswer(userInput);
          e.preventDefault();
          nextFishToHandleAnswer.name === fishGuess;
      
           // with the new state, figure out how to reference the value want! 
          // what other logic goes here?
          setState({
            fishGuess: "",
            // index: index + 1,

            
            correctCount: correctCount + 1,
            incorrectCount: incorrectCount + 1,
          });
          // if the guess was correct, we need to increment our correct answers in state
          // if the guess was incorrect, we need to increment out incorrect answers in state
        
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={fishGuess}
          name="fish-guess"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
