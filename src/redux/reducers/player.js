import { USER_INFO } from '../actions/actionType';

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
  default:
    return state;
  }
}

export default player;
