export const emailAction = (email) => ({
  type: 'USER_EMAIL',
  payload: email,
});

export const receiveCurrencies = (currencies) => ({
  type: 'RECEIVE_CURRENCIES',
  payload: {
    currencies,
  },
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  console.log(data);
  const currencies = {
    data,
  };
  dispatch(receiveCurrencies(currencies));
};
