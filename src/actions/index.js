// Coloque aqui suas actions
import getCurrencyAPI from '../services/awesomeAPI';

export const EMAIL = 'EMAIL';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const TOTAL_EXPENSE = 'TOTAL EXPENSE';

export const saveEmail = (email) => ({
  type: EMAIL,
  payload: {
    email,
  },
});

export const fetchCurrency = (currencies) => ({
  type: FETCH_CURRENCY,
  payload: {
    currencies,
  },
});

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const fetchAPI = () => async (dispatch) => {
  const currencies = await getCurrencyAPI();
  dispatch(fetchCurrency(currencies));
};

export const addExpenseThunk = (expense) => async (dispatch) => {
  const currencies = await getCurrencyAPI();
  dispatch(addExpense({ ...expense, exchangeRates: currencies }));
};
