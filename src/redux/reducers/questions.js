const INITIAL_STATE = {
  response_code: 0,
  results: [
    {
      category: '',
      type: null,
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [],
    },
  ],
};

function questions(state = INITIAL_STATE, action) {
  switch (action.payload) {
  default:
    return state;
  }
}

export default questions;
