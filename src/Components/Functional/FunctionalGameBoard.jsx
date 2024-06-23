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
  const [userInput, setUserInput] = useState("");

  const { index, nextFishToHandleAnswer } = props;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[index].url} alt={initialFishes[index].name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
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
