import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestion, incrementCount, decrementCount } from "../actions";

const mapStateToProps = state => {
  return {
    question: state.question.question,
    score: state.question.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: () => dispatch(fetchQuestion()),
    handleCorrectAnswer: () => {
      dispatch(incrementCount());
      dispatch(fetchQuestion());
    },
    handleIncorrectAnswer: () => dispatch(decrementCount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
