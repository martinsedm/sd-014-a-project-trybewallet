// Coloque aqui suas actions
import getCurrinciesApi from '../services/getCurrenciesApi';

export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const getUserEmail = (email) => ({
  type: GET_USER_EMAIL,
  email,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const getCurrencies = () => async (dispatch) => {
  const currencies = await getCurrinciesApi();
  const TOURIST_DOLLAR_REMOVE = 'USDT';

  delete currencies[TOURIST_DOLLAR_REMOVE];

  dispatch(saveCurrencies(Object.keys(currencies)));
};
