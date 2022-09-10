import { FETCH_QUESTIONS } from '../actions/actionType';

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

function questions(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case FETCH_QUESTIONS:
    return { results: payload.results };
  default:
    return state;
  }
}

export default questions;
