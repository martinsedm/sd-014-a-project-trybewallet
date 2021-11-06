// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

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

export function requestAPI() {
  return async (dispatch) => {
    const API_URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(API_URL);
    const dataAPI = await response.json();
    delete dataAPI.USDT;
    dispatch(userWallet(Object.keys(dataAPI), []));
  };
}
