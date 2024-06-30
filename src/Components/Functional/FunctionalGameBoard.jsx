import "./styles/game-board.css";

import { useState } from "react";

export function FunctionalGameBoard(props) {
  const [userInput, setUserInput] = useState("");

  const { nextFishToHandleAnswer, initialFishes, index } = props;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[index].url} alt={initialFishes[index]} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (userInput === "") {
            return;
          }
          nextFishToHandleAnswer(userInput);
          setUserInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={userInput}
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
