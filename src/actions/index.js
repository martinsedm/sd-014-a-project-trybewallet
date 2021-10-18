// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const FETCHING = 'FETCHING';
export const RECEIVE = 'RECEIVE';

const NUM_CHARS = 3;

export const loginAction = (user) => ({
  type: LOGIN,
  payload: {
    ...user,
  },
});

export const addExpense = (expense) => ({
  type: WALLET,
  payload: {
    ...expense,
  },
});

export const isFetching = () => ({
  type: FETCHING,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE,
  payload: [
    ...currencies,
  ],
});

// https://github.com/tryber/sd-014-a-project-trybewallet/pull/5/commits/16a0f4bbfceaa125380abc18c5dd4e2ad32e68b3
// Ref citada acima.
export const fetchCurrencies = () => (dispatch) => {
  dispatch(isFetching());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json)
        .filter((currenci) => currenci.length === NUM_CHARS);
      dispatch(receiveCurrencies(currencies));
      dispatch(isFetching());
    });
};

export const expenseThunk = (expense) => (dispatch) => {
  dispatch(isFetching());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => {
      const result = { ...expense, exchangeRates: { ...currencies } };
      dispatch(addExpense(result));
      dispatch(isFetching());
    });
};
