export const LOG_USER = 'LOG_USER';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_EXPENSES_TOTAL = 'UPDATE_EXPENSES_TOTAL';

export const logUser = (payload) => ({
  type: LOG_USER,
  payload,
});

const fetchCurrenciesSuccess = (payload) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload,
});

const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

const fetchExchangeRates = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  return response.json();
};

export const fetchCurrencies = () => async (dispatch) => {
  try {
    dispatch(fetchCurrenciesSuccess(Object.keys(await fetchExchangeRates())));
  } catch (error) {
    dispatch(fetchCurrenciesError(error));
  }
};

const updateExpensesTotal = () => ({ type: UPDATE_EXPENSES_TOTAL });

export const addExpense = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_EXPENSE,
      payload: {
        ...payload,
        exchangeRates: await fetchExchangeRates(),
      },
    });
    dispatch(updateExpensesTotal());
  } catch (error) {
    dispatch(fetchCurrenciesError(error));
  }
};
