import currenciesApi from '../services/currenciesApi';

export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const getUserEmail = (email) => ({
  type: GET_USER_EMAIL,
  email,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const saveExpense = (state, exchangeRates) => ({
  type: SAVE_EXPENSE,
  payload: {
    ...state,
    exchangeRates,
  },
});

export const getCurrencies = () => async (dispatch) => {
  const currencies = await currenciesApi();
  const TOURIST_DOLLAR_REMOVE = 'USDT';

  delete currencies[TOURIST_DOLLAR_REMOVE];

  dispatch(saveCurrencies(Object.keys(currencies)));
};

export const saveExpenseThunk = (localState) => async (dispatch) => {
  const currencies = await currenciesApi();
  dispatch(saveExpense(localState, currencies));
};
