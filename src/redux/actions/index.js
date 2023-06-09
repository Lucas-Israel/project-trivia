import {
  LOG_REQUEST,
  LOG_RESPONSE,
  USER_INFO,
  FETCH_QUESTIONS,
  START_TIMER,
  UPDATE_PLACAR,
  GET_TIMERID,
  RESET_TIMER,
  UPDATE_ASSERTIONS,
  CLEAR_TOKEN_RESULTS,
} from './actionType';

export const logRequestApi = () => ({ type: LOG_REQUEST });
export const logResponseApi = (payload) => ({
  type: LOG_RESPONSE,
  payload,
});
export const handleInfo = (payload) => ({ type: USER_INFO, payload });

export function fetchLogApi() {
  return async (dispatch) => {
    dispatch(logRequestApi());
    const responseLogApi = await fetch('https://opentdb.com/api_token.php?command=request');
    const resultLogApi = await responseLogApi.json();
    return dispatch(logResponseApi(resultLogApi));
  };
}

export const getQuestions = (payload) => ({ type: FETCH_QUESTIONS, payload });

export const fetchQuestions = (token) => async (dispatch) => {
  try {
    const fetching = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const result = await fetching.json();
    return dispatch(getQuestions(result));
  } catch (e) {
    return e;
  }
};

export const startTimer = () => ({ type: START_TIMER });
export const updatePlacar = (payload) => ({ type: UPDATE_PLACAR, payload });
export const getTimerId = (payload) => ({ type: GET_TIMERID, payload });
export const resetTimer = ({ type: RESET_TIMER });
export const updateAssertions = () => ({ type: UPDATE_ASSERTIONS });
export const clearTokenResults = ({ type: CLEAR_TOKEN_RESULTS });
