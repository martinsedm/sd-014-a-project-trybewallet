// Coloque aqui suas actions
export const USER_INPUT = 'USER_INPUT';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const loginAction = (email) => ({
  type: USER_INPUT,
  email,
});

const currenciesAdd = (action) => ({
  type: ADD_CURRENCIES,
  payload: action,
});

const addExpenseAction = (exchangeRates, state) => ({
  type: ADD_EXPENSE,
  payload: {
    ...state,
    exchangeRates,
  },
});

export const deleteExpenseAction = (expenses) => ({
  type: DELETE_EXPENSE,
  expenses,
});

export function fetchCoinAPI() {
  return async (dispatch) => {
    const coinFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinJSON = await coinFetch.json();
    const coinKeys = Object.keys(coinJSON);
    const coinOption = coinKeys.filter((coin) => coin !== 'USDT');
    dispatch(currenciesAdd(coinOption));
  };
}

export function fetchExpense(state) {
  return async (dispatch) => {
    const coinFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinJSON = await coinFetch.json();
    dispatch(addExpenseAction(coinJSON, state));
  };
}

// Actions para a edição da despesa

export const INIT_EDIT = 'INIT_EDIT';
export const EXPENSE_EDIT = 'EXPENSE_EDIT';

export const initOrFinishEdit = (idxEdit, editing) => ({
  type: INIT_EDIT,
  payload: {
    idxEdit,
    editing: !editing,
  },
});

export const editExpense = (expenses) => ({
  type: EXPENSE_EDIT,
  expenses,
});
