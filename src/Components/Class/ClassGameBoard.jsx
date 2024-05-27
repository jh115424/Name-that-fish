import "./styles/game-board.css";

import { Images } from "../../assets/Images";

import { Component } from "react";

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

export class ClassGameBoard extends Component {
  state = {
    fishGuessInput: "",
    fishes: initialFishes,
    correctCount: 0,
    incorrectCount: 0,

    nextFishToName: this.props.nextFishToName,
  };

  render() {
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
            this.setState({
              fishGuessInput: "",
            });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishGuessInput}
            onChange={(e) => {
              this.setState({
                fishGuessInput: e.target.value,
                correctCount: 0,
              });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// export class ClassGameBoard extends Component {
//   constructor(props) {

//     super(props);
//     this.state = {
//       fishGuessInput: "",
//       fishes: initialFishes,
//       correctCount: 0,
//       incorrectCount: 0,
//       nextFishToName: initialFishes[0],
//     };
//   }

//   handleFishGuessInputChange = (e) => {
//  this.setState({
//       fishGuessInput: e.target.value,
//       correctCount: 0,
//     });
//   };
//   handleFishGuessSubmit = (e) => {
//     e.preventDefault();
//     const { fishGuessInput, fishes, correctCount, incorrectCount } = this.state;
//     const newFishes = fishes.filter(
//       (fish) => fish.name!== fishGuessInput
//     );
//     if (newFishes.length === 0) {
//       this.props.showTheResults();
//     }
//     this.setState({
//       fishes: newFishes,
//       fishGuessInput: "",
//       correctCount: correctCount + 1, // add 1 to correctCount
//       incorrectCount: incorrectCount - 1, // subtract 1 from incorrectCount
//       nextFishToName: newFishes[0],
//     });

//   }

//   render() {
//     const nextFishToName = initialFishes[0];
//     return (
//       <div id="game-board">
//         <div id="fish-container">
//           <img src={nextFishToName.url}
//             onSubmit = {this.handleFishGuessSubmit}
//            alt={nextFishToName.name} />
//         </div>
//         <form id="fish-guess-form">
//           <label htmlFor="fish-guess">What kind of fish is this?</label>
//           <input type="text" name="fish-guess" />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }
