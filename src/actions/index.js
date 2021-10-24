export const emailAction = (email) => ({
  type: 'USER_EMAIL',
  payload: email,
});

export const expensesAction = (expenses) => ({
  type: 'RECEIVE_EXPENSES',
  payload: expenses,
});

export const receiveCurrencies = (currencies) => ({
  type: 'RECEIVE_CURRENCIES',
  payload: {
    currencies,
  },
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = {
    data,
  };
  dispatch(receiveCurrencies(currencies));
};
