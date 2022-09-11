import { FETCH_QUESTIONS, START_TIMER } from '../actions/actionType';

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
  timer: 30,
  isBtnDisabled: false,
};

function questions(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case FETCH_QUESTIONS:
    return {
      ...state,
      results: payload.results,
    };
  case START_TIMER:
    return {
      ...state,
      timer: state.timer - 1,
    };
  default:
    return state;
  }
}

export default questions;
