import React from "react";

class Question extends React.Component {
  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    console.log(this.props.question);
    if (!this.props.question.category) return null;

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">
            <i>Quize</i>
            <i>machine</i>
          </h1>
        </header>
        <div className="app-item">
          <div className="app-item-title">
            <h2 className="">The question is...</h2>
            <p>Category: {decodeURIComponent(this.props.question.category)}</p>
            <p>Difficulty: {this.props.question.difficulty}</p>
            <p>Question: {decodeURIComponent(this.props.question.question)}</p>
            <h2 className="">And the answer is...</h2>
          </div>
          <div className="app-item-title">?</div>
          <div className="button">
            <button
              className="submitbtn"
              onClick={() => this.props.handleIncorrectAnswer()}
            >
              {decodeURIComponent(this.props.question.incorrect_answers[0])}
            </button>
            <button
              className="submitbtn"
              onClick={() => this.props.handleIncorrectAnswer()}
            >
              {decodeURIComponent(this.props.question.incorrect_answers[1])}
            </button>
            <button
              className="submitbtn"
              onClick={() => this.props.handleCorrectAnswer()}
            >
              {decodeURIComponent(this.props.question.correct_answer)}
            </button>
            <button
              className="submitbtn"
              onClick={() => this.props.handleIncorrectAnswer()}
            >
              {decodeURIComponent(this.props.question.incorrect_answers[2])}
            </button>
          </div>
          <h2 className="">Your score: {this.props.score}</h2>
        </div>
      </div>
    );
  }
}

export default Question;
