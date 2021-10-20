// Coloque aqui suas actions
import getCurrinciesApi from '../services/getCurrenciesApi';

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
  const currencies = await getCurrinciesApi();
  const TOURIST_DOLLAR_REMOVE = 'USDT';

  delete currencies[TOURIST_DOLLAR_REMOVE];

  dispatch(saveCurrencies(Object.keys(currencies)));
};

export const saveExpenseThunk = (localState) => async (dispatch) => {
  const currencies = await getCurrinciesApi();
  dispatch(saveExpense(localState, currencies));
};
