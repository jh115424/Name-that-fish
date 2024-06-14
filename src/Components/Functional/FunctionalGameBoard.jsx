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
  const [fishGuess, setFishGuess] = useState("");

  const nextFishToName = initialFishes[0];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setFishGuess("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          value={fishGuess}
          name="fish-guess"
          onChange={(e) => setFishGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

// const initialFishes = [
//   {
//     name: "trout",
//     url: Images.trout,
//   },
//   {
//     name: "salmon",
//     url: Images.salmon,
//   },
//   {
//     name: "tuna",
//     url: Images.tuna,
//   },
//   {
//     name: "shark",
//     url: Images.shark,
//   },
// ];

// export function FunctionalGameBoard() {
//   const [fishGuess, setFishGuess ] = useState("");

//   const nextFishToName = initialFishes[0];
//   return (
//     <div id="game-board">
//       <div id="fish-container">
//         <img src={nextFishToName.url} alt={nextFishToName.name} />
//       </div>
//       <form
//         id="fish-guess-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           setFishGuess("");
//           // this.setState({ fishGuessInput: "" });
//           // setFishGuess("");
//         }}
//       >
//         <label htmlFor="fish-guess">What kind of fish is this?</label>
//         <input
//           type="text"
//           value= {fishGuess}
//           name="fish-guess"
//           onChange={(e) => setFishGuess(e.target.value)}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
