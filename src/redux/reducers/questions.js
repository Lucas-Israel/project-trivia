import {
  FETCH_QUESTIONS,
  START_TIMER,
  GET_TIMERID,
  RESET_TIMER,
  CLEAR_TOKEN_RESULTS,
} from '../actions/actionType';

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
  timerId: 0,
  isBtnDisabled: false,
};

function questions(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case FETCH_QUESTIONS:
    return {
      ...state,
      response_code: payload.response_code,
      results: payload.results,
    };
  case START_TIMER:
    return {
      ...state,
      timer: state.timer - 1,
    };
  case GET_TIMERID:
    return {
      ...state,
      timerId: payload,
    };
  case RESET_TIMER:
    return {
      ...state,
      timer: 30,
    };
  case CLEAR_TOKEN_RESULTS:
    return { ...state, results: [] };
  default:
    return state;
  }
}

export default questions;
