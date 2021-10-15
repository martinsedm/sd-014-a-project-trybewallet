export const LOGIN_TYPE = 'LOGIN_TYPE';
export const ADD_WALLET = 'ADD_WALLET';
export const FETCHING = 'FETCHING';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

const NUM_CHARS = 3;

const FETCH_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const notifyLoginAction = (user) => ({
  type: LOGIN_TYPE,
  payload: {
    ...user,
  },
});

export const isFetching = () => ({
  type: FETCHING,
});

export const addExpense = (expense) => ({
  type: ADD_WALLET,
  payload: {
    ...expense,
  },
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: [
    ...currencies,
  ],
});

// actions assíncronas:
export const getIntCurrenciesThunk = () => (dispatch) => {
  dispatch(isFetching());
  return fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json)
        .filter((currency) => currency.length === NUM_CHARS);
      dispatch(addCurrencies(currencies));
      dispatch(isFetching());
    });
};

export const addExpenseThunk = (expense) => (dispatch) => {
  dispatch(isFetching());
  return fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((currencies) => {
      const result = { ...expense, exchangeRates: { ...currencies } };
      dispatch(addExpense(result));
      dispatch(isFetching());
    });
};
