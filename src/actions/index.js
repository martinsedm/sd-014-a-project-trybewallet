export const SET_USER_VALUE = 'SET_USER_VALUE';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';

export const setUserValue = (payload) => ({
  type: SET_USER_VALUE,
  payload,
});

export const setCurrencies = (currencies) => (
  {
    type: SET_CURRENCIES,
    payload: { currencies },
  }
);

export const setExpense = (payload) => (
  {
    type: SET_EXPENSE,
    payload,
  });

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = {
      data,
    };
    dispatch(setCurrencies(currencies));
  };
}
