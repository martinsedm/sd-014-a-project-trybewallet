import getCoins from '../services/coinsAPI';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setEmail = (payload) => ({ type: SET_EMAIL, payload });
export const setCurrencies = (payload) => ({ type: SET_CURRENCIES, payload });
export const setExpenses = (payload) => ({ type: SET_EXPENSES, payload });

export const getCoinsAPI = () => async (dispatch) => {
  try {
    const coins = await getCoins();
    const payload = Object.values(coins).filter((coin) => coin.codein !== 'BRLT');
    dispatch(setCurrencies(payload));
  } catch (error) {
    dispatch(setCurrencies(error));
  }
};
