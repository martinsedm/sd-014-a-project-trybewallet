import { getCurrencyApi } from '../services/fetchAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENCIES = 'ADD_EXPENCIES';
export const SET_CURRENCY = 'SET_CURRENCY';

export const userLoginAction = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addExpenciesAction = (state, payload) => ({
  type: ADD_EXPENCIES,
  expencies: [
    ...state, payload,
  ],
});

export const setCurrencyAction = (payload) => ({
  type: SET_CURRENCY,
  payload,
});

export function fetchCurrencyApi() {
  return async (dispatch) => {
    const data = await getCurrencyApi();
    dispatch(setCurrencyAction(data));
  };
}
