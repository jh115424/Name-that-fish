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
const [fishState, setFishState] = useState({})
  



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
              fishGuessInput: fishState.fishGuessInput,
              // correctCount: fishState.correctCount,
              // incorrectCount: fishState.incorrectCount,
              index: fishState.index + 1,

           

            })

          }
        />
        <input type="submit" />
      </form>
    </div>
  );
}
