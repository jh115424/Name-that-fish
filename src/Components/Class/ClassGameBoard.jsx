import "./styles/game-board.css";

import { Images } from "../../assets/Images";

import { Component } from "react";

export const initialFishes = [
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
  constructor(props) {
    super(props);
    this.state = {
      fishGuessInput: "",
    };
  }

  render() {
    const { nextFishToHandleAnswer, index } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={initialFishes[index].url} alt={initialFishes[index].name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            nextFishToHandleAnswer(this.state.fishGuessInput);
            this.setState({
              fishGuessInput: "",
            });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            value={this.state.fishGuessInput}
            name="fish-guess"
            onChange={(e) => {
              this.setState({
                fishGuessInput: e.target.value,
              });
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
