import { LOG_REQUEST, LOG_RESPONSE } from './actionType';

export const logRequestApi = () => ({ type: LOG_REQUEST });

export const logResponseApi = (payload) => ({
  type: LOG_RESPONSE,
  payload,
});

export function fetchLogApi() {
  return async (dispatch) => {
    dispatch(logRequestApi());
    const responseLogApi = await fetch('https://opentdb.com/api_token.php?command=request');
    const resultLogApi = await responseLogApi.json();
    return dispatch(logResponseApi(resultLogApi));
  };
}