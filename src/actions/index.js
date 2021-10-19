// Coloque suas actions
import currenciesApi from '../services/currenciesAPI';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const SUBMIT_WALLET = 'SUBIMIT_WALLET';
export const SUBMIT_WALLET_CURRENCIES = 'SUBMIT_WALLET_CURRENCIES';

export const actionLoginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const actionSetExpenses = (payload) => ({
  type: SUBMIT_WALLET,
  payload,
});

export const actionSetCurrencies = (currencies) => ({
  type: SUBMIT_WALLET_CURRENCIES,
  currencies,
});

export function setCurrencies() {
  return async (dispatch) => {
    try {
      const result = await currenciesApi();
      const filteredCurrencies = Object.keys(result).filter((key) => key !== 'USDT');
      dispatch(actionSetCurrencies(filteredCurrencies));
    } catch (error) {
      console.log(error);
    }
  };
}
