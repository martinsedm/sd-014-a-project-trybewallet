export const LOGIN_TYPE = 'LOGIN_TYPE';
export const ADD_EXPENSE = 'ADD_WALLET';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
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

export const isFetchingAction = () => ({
  type: FETCHING,
});

export const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    ...expense,
  },
});

export const removeExpenseAction = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const addCurrenciesAction = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: [
    ...currencies,
  ],
});

// actions assíncronas:
export const getIntCurrenciesThunk = () => (dispatch) => {
  dispatch(isFetchingAction());
  return fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json)
        .filter((currency) => currency.length === NUM_CHARS);
      dispatch(addCurrenciesAction(currencies));
      dispatch(isFetchingAction());
    });
};

export const addExpenseThunk = (expense) => (dispatch) => {
  dispatch(isFetchingAction());
  return fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((currencies) => {
      const result = { ...expense, exchangeRates: { ...currencies } };
      dispatch(addExpenseAction(result));
      dispatch(isFetchingAction());
    });
};
