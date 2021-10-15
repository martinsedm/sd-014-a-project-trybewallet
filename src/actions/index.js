export const LOGIN_TYPE = 'LOGIN_TYPE';
export const ADD_WALLET = 'ADD_WALLET';
export const FETCHING = 'FETCHING';
export const ADD_CURRENCIES_OBJ = 'ADD_CURRENCIES_OBJ';
export const ADD_CURRENCIES_ARR = 'ADD_CURRENCIES_ARR';

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

export const addExpenseAction = (expense) => ({
  type: ADD_WALLET,
  payload: {
    ...expense,
  },
});

export const addCurrenciesObject = (currencies) => ({
  type: ADD_CURRENCIES_OBJ,
  payload: {
    ...currencies,
  },
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES_ARR,
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
      dispatch(addCurrenciesObject(json));
      const currencies = Object.keys(json)
        .filter((currency) => currency.length === NUM_CHARS);
      dispatch(addCurrencies(currencies));
      dispatch(isFetching());
    });
};
