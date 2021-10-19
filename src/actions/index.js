// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const userAction = (email) => (
  {
    type: USER_ACTION,
    payload: email,
  }
);

export const getCurrencies = (currency) => (
  {
    type: GET_CURRENCIES,
    payload: currency,
  }
);

export function fetchCurrencies() {
  return async (dispatch) => {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await data.json();
    const currencies = Object.keys(json).filter((curr) => curr !== 'USDT');
    dispatch(getCurrencies(currencies));
  };
}
