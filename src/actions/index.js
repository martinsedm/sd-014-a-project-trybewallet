import getCurrencyRate from '../services/currencyAPI';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_INSTANT_RATE = 'REQUEST_INSTANT_RATE';
export const RECEIVE_INSTANT_RATE = 'RECEIVE_INSTANT_RATE';
export const login = (value) => ({ type: LOGIN, value });
export const addExpense = (value) => ({ type: ADD_EXPENSE, value });

export const requestInstantRate = () => ({
  type: REQUEST_INSTANT_RATE,
});
export const receiveInstantRate = (exchangeRates) => ({
  type: RECEIVE_INSTANT_RATE,
  exchangeRates,
});

export const fetchInstantRate = () => async (dispatch) => {
  dispatch(requestInstantRate());
  const resultAPI = await getCurrencyRate();
  dispatch(receiveInstantRate(resultAPI));
  dispatch(addExpense(resultAPI));
};
