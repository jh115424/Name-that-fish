import { Component } from "react";

export class ClassFinalScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 4,
      incorrectCount: 0,
      totalCount: 4,
  
    };
  }

  render() {
    const { correctCount, totalCount } = this.state;
   

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
