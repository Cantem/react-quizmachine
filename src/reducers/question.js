function question(
  state = {
    question: {},
    score: 0,
    message: {}
  },
  action
) {
  switch (action.type) {
    case "ASK_QUESTION":
      const StateQuestionUpdated = Object.assign({}, state, {
        question: action.question
      });
      return StateQuestionUpdated;
    case "INCREMENT_SCORE":
      if (state.question.difficulty == "hard") {
        let StateScoreAdd = Object.assign({}, state, {
          score: state.score + 3,
          message: alert("👍 That's correct, you've earned 3 points!")
        });
        return StateScoreAdd;
      } else if (state.question.difficulty == "medium") {
        let StateScoreAdd = Object.assign({}, state, {
          score: state.score + 2,
          message: alert("👍 That's correct, you've earned 2 points!")
        });
        return StateScoreAdd;
      } else {
        let StateScoreAdd = Object.assign({}, state, {
          score: state.score + 1,
          message: alert("👍 That's correct, you've earned 1 point!")
        });
        return StateScoreAdd;
      }

    case "DECREMENT_SCORE":
      const StateScoreDeduct = Object.assign({}, state, {
        score: state.score - 1,
        message: alert("👎 Wrong answer, you've lost 1 point!")
      });
      return StateScoreDeduct;
    default:
      return state;
  }
}

export default question;
