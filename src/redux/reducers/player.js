import { USER_INFO, UPDATE_PLACAR } from '../actions/actionType';

const INITIAL_STATE = {
  name: 'usuario nao identificado',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
};

function player(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case USER_INFO:
    return {
      ...state,
      name: payload.inputName,
      gravatarEmail: payload.inputEmail,
    };
  case UPDATE_PLACAR:
    return {
      ...state,
      score: state.score + payload,
    };
  default:
    return state;
  }
}

export default player;
