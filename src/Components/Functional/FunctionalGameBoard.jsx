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

export function FunctionalGameBoard(props) {
  const [fishGuess, setFishGuess] = useState("");

  const { nextFishToHandleAnswer, index } = props;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[index].url} alt={initialFishes[index].name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          nextFishToHandleAnswer.name === fishGuess;
          setFishGuess("");
          this.setState({
            fishGuessInput: "",
          });
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={fishGuess}
          name="fish-guess"
          onChange={(e) => setFishGuess(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
