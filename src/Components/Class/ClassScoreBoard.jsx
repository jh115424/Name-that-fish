import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 0,
      incorrectCount: 0,
      newEntry: "",
      answersLeft: ["trout", "salmon", "tuna", "shark"],
    };
  }

  render() {
    const { answersLeft } = this.state;
    const { correctCount, incorrectCount } = this.state;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div
              key={answer}
              onChange={(e) => {
                this.setState({
                  newEntry: e.target.value,
                  correctCount: 0,
                });
              }}
              className="choice"
            >
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}

// const answersLeft = ["trout", "salmon", "tuna", "shark"];

// export class ClassScoreBoarname}ends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: "",
//       correctCount: 0,
//       incorrectCount: 0,

//       answersLeft: answersLeft,
//     };
//   }
//   handleUserInputSubmit = (e) => {
//     e.preventDefault();
//     const { answersLeft, userInput } = this.state;
//     const newAnswersLeft = answersLeft.filter(
//       (answer) => answer!== userInput
//       );
//       if (newAnswersLeft.length === 0) {
//         this.props.showTheResults();
//     }
//     this.setState({
//       answersLeft: newAnswersLeft,
//       userInput: "",
//     });
//   };
//   handleUserInputChange = (e) => {
//     this.setState({
//       userInput: e.target.value,
//     });
//   };

//   render() {
//     const { answersLeft } = this.state;

//     return (
//       <div id="score-board">
//         <div>Incorrect 🔻: {this.props.incorrectCount}</div>
//         <div id="choices-left">
//           {answersLeft.map((answer) => (
//             <div key={answer} className="choice">
//               {answer}
//             </div>
//           ))}
//         </div>
//         <div>Correct ✅: {this.props.correctCount}</div>
//       </div>
//     );
//   }
// }
