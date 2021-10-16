import currenciesApi from '../services/currenciesAPI';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_WALLET = 'SUBMIT_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const SUBMIT_WALLET_CURRENCIES = 'SUBMIT_WALLET_CURRENCIES';

export const actionRegisterUser = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionSetExpenses = (payload, result) => ({
  type: SUBMIT_WALLET,
  payload,
  result,
});

export const actionSetCurrencies = (currencies) => ({
  type: SUBMIT_WALLET_CURRENCIES,
  currencies,
});

export function exchange(expense) {
  return async (dispatch) => {
    try {
      const result = await currenciesApi();
      dispatch(actionSetExpenses(expense, result));
    } catch (error) {
      console.log(error);
    }
  };
}

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
