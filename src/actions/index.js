import getCoins from '../services/coinsAPI';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setEmail = (payload) => ({ type: SET_EMAIL, payload });
export const setCurrencies = (payload) => ({ type: SET_CURRENCIES, payload });

export const getCoinsAPI = () => async (dispatch) => {
  try {
    const coins = await getCoins();
    const payload = Object.values(coins).filter((coin) => coin.code !== 'USDT');
    dispatch(setCurrencies(payload));
  } catch (error) {
    dispatch(setCurrencies(error));
  }
};
