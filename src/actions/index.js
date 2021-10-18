import { getAllCoins } from '../services/currencyAPI';

// // Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';

const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: email,
});

export const apiSucess = (results) => ({
  type: API_SUCESS,
  payload: results,
});

export const apiError = () => ({
  type: API_ERROR,
});

export const getAllCoinsFetchApi = () => async (dispatch) => {
  try {
    const response = await getAllCoins();
    const search = Object.keys(response).filter((coins) => coins !== 'USDT');
    dispatch(apiSucess(search));
    console.log('Response:', search);
  } catch (error) {
    dispatch(apiError());
  }
};

export default loginEmail;
