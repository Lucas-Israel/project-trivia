const INITIAL_STATE = {
  response_code: 0,
  response_message: '',
  token: '',
};

function token(state = INITIAL_STATE, action) {
  switch (action.payload) {
  default:
    return state;
  }
}

export default token;
