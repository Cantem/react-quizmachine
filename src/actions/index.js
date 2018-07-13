export function question(results) {
  return {
    type: "ASK_QUESTION",
    question: results
  };
}

export function incrementCount() {
  return {
    type: "INCREMENT_SCORE"
  };
}

export function decrementCount() {
  return {
    type: "DECREMENT_SCORE"
  };
}

export function fetchQuestion() {
  return function(dispatch, getState) {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986")
      .then(response => response.json())
      .then(json => {
        dispatch(question(json.results[0]));
      });
  };
}
