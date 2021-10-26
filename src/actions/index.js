import { getAllCoins } from '../services/currencyAPI';

// // Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: email,
});

export const apiSucess = (results) => ({
  type: API_SUCESS,
  payload: results,
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});

export const getAllCoinsFetchApi = () => async (dispatch) => {
  try {
    const response = await getAllCoins();
    const search = Object.keys(response).filter((coins) => coins !== 'USDT');
    dispatch(apiSucess(search));
    console.log('Response:', search);
  } catch (error) {
    dispatch(apiError(error.mensage));
  }
};

export const setExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export default loginEmail;
