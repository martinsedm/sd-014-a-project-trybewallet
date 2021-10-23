export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const TOTAL_COST = 'TOTAL_COST';

export const userEmailAction = (email) => ({
  type: USER_EMAIL,
  payload: {
    email,
  },
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: {
    currencies,
  },
});

export const newExpense = (
  { value, description, currency, method, tag }, exchangeRates,
) => ({
  type: NEW_EXPENSE,
  payload: {
    id: 0,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  },
});

export const totalCost = (total) => ({
  type: TOTAL_COST,
  payload: {
    total,
  },
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = {
    data,
  };
  dispatch(getCurrenciesSuccess(currencies));
};

export const newExpenseThunk = (
  { value, description, currency, method, tag },
) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await response.json();
  dispatch(newExpense({ value, description, currency, method, tag }, exchangeRates));
};
