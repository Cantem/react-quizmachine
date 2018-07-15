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
            <h3 className="app-item-title_field">The question is...</h3>
            <p>Category: {decodeURIComponent(this.props.question.category)}</p>
            <p>Difficulty: {this.props.question.difficulty}</p>
            <p className="app-item-title_field_paragraph">
              {decodeURIComponent(this.props.question.question)}
            </p>
            <h3 className="app-item-title_field">And the answer is...</h3>
          </div>
          <div className="app-item-title">
            <img
              className="app-item-title_field"
              src="./static/question.jpeg"
            />
          </div>
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
          <h2 className="app-item-score">Your score: {this.props.score}</h2>
        </div>
      </div>
    );
  }
}

export default Question;
