import React from "react";

class Question extends React.Component {
  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    console.log(this.props.question);
    if (!this.props.question.category) return null;
    return (
      <div>
        <h2>The question is...</h2>
        <p>Category: {decodeURIComponent(this.props.question.category)}</p>
        <p>Difficulty: {this.props.question.difficulty}</p>
        <p>Question: {decodeURIComponent(this.props.question.question)}</p>
        <h2>And the answer is...</h2>
        <button onClick={() => this.props.handleIncorrectAnswer()}>
          {decodeURIComponent(this.props.question.incorrect_answers[0])}
        </button>
        <button onClick={() => this.props.handleIncorrectAnswer()}>
          {decodeURIComponent(this.props.question.incorrect_answers[1])}
        </button>
        <button onClick={() => this.props.handleIncorrectAnswer()}>
          {decodeURIComponent(this.props.question.incorrect_answers[2])}
        </button>
        <button onClick={() => this.props.handleCorrectAnswer()}>
          {decodeURIComponent(this.props.question.correct_answer)}
        </button>

        <h2>Your score: {this.props.score}</h2>
      </div>
    );
  }
}

export default Question;
