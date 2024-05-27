import { Component } from "react";

const totalCount = 4;

export class ClassFinalScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>

          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
