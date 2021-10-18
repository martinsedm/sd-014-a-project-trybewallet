// Coloque aqui suas actions
import getApiEconomia from '../services/economiaAPI';

export const LOG_IN = 'LOG_IN';
export const GET_API_ECONOMIA_SUCCESS = 'GET_API_ECONOMIA_SUCCESS';
export const GET_API_ECONOMIA_ERROR = 'GET_API_ECONOMIA_ERROR';

// Action Creator
export const emailForAction = (value) => ({
  type: LOG_IN,
  payload: value,
});

// Action Creator
export const getApiSuccess = (payload) => ({
  type: GET_API_ECONOMIA_SUCCESS,
  payload,
});

// Action Creator
export const getApiError = (payload) => ({
  type: GET_API_ECONOMIA_ERROR,
  payload,
});

export const getApiEconomiaThunk = () => async (dispatch) => {
  const response = await getApiEconomia();
  delete response.USDT;
  dispatch(getApiSuccess(response));
};
