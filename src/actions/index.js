import { loadFromLocalStorage, saveToLocalStorage } from '../services';

export const LOGIN_TYPE = 'LOGIN_TYPE';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const FETCHING = 'FETCHING';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const EDIT_MODE = 'EDIT_MODE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const UPDATE_BY_LS = 'UPDATE_BY_LS';
export const CHANGE_EXCHANGE = 'CHANGE_EXCHANGE';
export const ERROR = 'ERROR';

const NUM_CHARS = 3;

const FETCH_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const notifyLoginAction = (user) => ({
  type: LOGIN_TYPE,
  payload: {
    ...user,
  },
});

export const notifiyErrorAction = (message) => ({
  type: ERROR,
  payload: message,
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

export const saveExpenseAction = (expense) => ({
  type: SAVE_EXPENSE,
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
  payload: currencies,
});

export const editExpenseModeAction = (id) => ({
  type: EDIT_MODE,
  payload: id,
});

export const updateByLocalStorageAction = (expenses) => ({
  type: UPDATE_BY_LS,
  payload: expenses,
});

export const changeCurrencyExchangeAction = (exchange) => ({
  type: CHANGE_EXCHANGE,
  payload: exchange,
});

// actions assíncronas:
export const getIntCurrenciesThunk = () => (dispatch) => {
  dispatch(isFetchingAction());
  fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json)
        .filter((currency) => currency.length === NUM_CHARS);
      dispatch(addCurrenciesAction(currencies));
      dispatch(isFetchingAction());
    })
    .catch((error) => {
      dispatch(notifiyErrorAction(error.message));
      dispatch(addCurrenciesAction(['erro']));
      dispatch(isFetchingAction());
    });
};

export const addExpenseThunk = (expense) => (dispatch) => {
  dispatch(isFetchingAction());
  fetch(FETCH_ENDPOINT)
    .then((response) => response.json())
    .then((currencies) => {
      const result = { ...expense, exchangeRates: { ...currencies } };
      dispatch(addExpenseAction(result));
      dispatch(isFetchingAction());
    })
    .catch((error) => {
      dispatch(notifiyErrorAction(error.message));
      dispatch(addExpenseAction({}));
      dispatch(isFetchingAction());
    });
};

export const readLocalStorageThunk = (email) => (dispatch) => {
  dispatch(isFetchingAction());
  loadFromLocalStorage(email)
    .then((expenses) => {
      dispatch(updateByLocalStorageAction(expenses));
      dispatch(isFetchingAction());
    })
    .catch((error) => {
      dispatch(updateByLocalStorageAction([]));
      dispatch(isFetchingAction());
      dispatch(notifiyErrorAction(error.message));
    });
};

export const saveToLocalStorageThunk = (email, expenses) => (dispatch) => {
  dispatch(isFetchingAction());
  saveToLocalStorage(email, expenses)
    .then(() => dispatch(isFetchingAction()))
    .catch((error) => {
      dispatch(isFetchingAction());
      dispatch(notifiyErrorAction(error.message));
    });
};
