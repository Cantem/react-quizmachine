function question(
  state = {
    question: {},
    score: 0
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
      const StateScoreAdd = Object.assign({}, state, {
        score: state.score + 1
      });
      return StateScoreAdd;

    case "DECREMENT_SCORE":
      const StateScoreDeduct = Object.assign({}, state, {
        score: state.score - 1
      });

      return StateScoreDeduct;

    default:
      return state;
  }
}

export default question;
