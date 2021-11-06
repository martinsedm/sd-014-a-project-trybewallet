// Coloque aqui suas actions
export const LOGGED_EMAIL = 'LOGGED_EMAIL';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const loggedEmail = (email) => ({
  type: LOGGED_EMAIL,
  email,
});

export const changeWallet = (currencies) => ({
  type: CHANGE_WALLET,
  wallet: {
    currencies,
  },
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});

const url = 'https://economia.awesomeapi.com.br/json/all';

export const getCoinsOfApi = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    delete json.USDT;
    return dispatch(changeWallet(json));
  } catch (err) {
    console.log(err.message);
  }
};
