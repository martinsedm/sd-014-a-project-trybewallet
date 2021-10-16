export const USER = 'USER';
export const WALLET = 'WALLET';
export const GET_CURRENCY = 'GET_CURRENCY';

export const userAction = (email) => ({
  type: USER,
  payload: {
    email,
  },
});

export const walletAction = (currencies, expenses) => ({
  type: WALLET,
  payload: {
    currencies,
    expenses,
  },
});

export function fetchAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    dispatch(walletAction(Object.keys(json), []));
  };
}
