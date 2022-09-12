import { LOG_REQUEST, LOG_RESPONSE, CLEAR_TOKEN_RESULTS } from '../actions/actionType';

const INITIAL_STATE = {
  response_code: 0,
  response_message: '',
  token: '',
};

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOG_REQUEST:
    return { ...state };
  case LOG_RESPONSE:
    return {
      ...state,
      response_code: action.payload.response_code,
      response_message: action.payload.response_message,
      token: action.payload.token,
    };
  case CLEAR_TOKEN_RESULTS:
    return { ...state, token: '' };
  default:
    return state;
  }
}

export default token;
