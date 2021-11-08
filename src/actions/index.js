// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const userLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const userWallet = (currencies, expenses) => ({
  type: WALLET,
  payload: {
    currencies,
    expenses,
  },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export function requestAPI() {
  return async (dispatch) => {
    const API_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(API_URL);
    const dataAPI = await response.json();
    delete dataAPI.USDT;
    dispatch(userWallet(Object.keys(dataAPI), []));
  };
}

export function ThunkAPI(expense) {
  return async (dispatch) => {
    const API_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(API_URL);
    const dataAPI = await response.json();
    expense.exchangeRates = dataAPI;
    dispatch(addExpense(expense));
  };
}
