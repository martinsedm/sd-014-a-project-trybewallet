export const SET_USER = 'SET_USER';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const SET_CURRENCY = 'SET_CURRENCY';

export const setUser = (email) => ({ type: SET_USER, payload: { email } });

export const addExpensesAction = (payload, exchangeRates) => ({
  type: ADD_EXPENSES,
  payload: {
    ...payload,
    exchangeRates,
  },
});

export const setCurrencyAction = (payload) => ({ type: SET_CURRENCY, payload });

export const currencyData = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

export const fetchCurrency = () => (
  async (dispatch) => dispatch(setCurrencyAction(await currencyData())));

export const addExpenses = (payload) => async (dispatch) => {
  dispatch(addExpensesAction(payload, await currencyData()));
};
