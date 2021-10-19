// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_API = 'SAVE_API';
export const SAVE_API_EXPENSE = 'SAVE_API_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const saveUser = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export default saveUser;

export const apiStore = (currencies) => ({
  type: SAVE_API,
  currencies,
});

export const fetchAPI = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(apiStore(response));
};

export const apiStoreExpense = (state, expense) => ({
  type: SAVE_API_EXPENSE,
  state,
  exchangeRates: expense,
});

export const fetchAPIExpenses = (state) => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(apiStoreExpense(state, response));
};

export const deleteExpense = (idExpense) => ({
  type: DELETE_EXPENSE,
  idExpense,
});
