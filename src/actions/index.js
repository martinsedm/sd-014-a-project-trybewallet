export const SET_USER = 'SET_USER';

export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setUser = (email) => ({
  type: SET_USER,
  email,
});

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await response.json();
  const currencies = Object.keys(responseJSON).filter((currency) => currency !== 'USDT');
  dispatch(setCurrencies(currencies));
};
