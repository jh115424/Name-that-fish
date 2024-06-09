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

export function FunctionalGameBoard() {
  const [fishState, setFishState] = useState({
    fishGuessInput: "",
    correctCount: 0,
    incorrectCount: 0,
    initialFishes: initialFishes,

    index: 0,
  });

  const nextFishToName = initialFishes[0];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={() =>
            
            setFishState({
              correctCount: fishState.correctCount + 1,
              incorrectCount: fishState.incorrectCount - 1,
              initialFishes: initialFishes.filter(
                (fish) =>
                  fish.name !== fishState.fishGuessInput &&
                  fish.name !== nextFishToName.name &&
                  fish.name !== initialFishes[fishState.index + 1].name
              ),
            })
          }
        />
        <input type="submit" />
      </form>
    </div>
  );
}
