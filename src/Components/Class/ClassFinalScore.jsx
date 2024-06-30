import { Component } from "react";

export class ClassFinalScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 0,
      incorrectCount: 4,
      totalCount: 0,
    };
  }
  render() {
    const { correctCount, incorrectCount } = this.props;

    const totalCount = correctCount + incorrectCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p> {correctCount}</p>

          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
