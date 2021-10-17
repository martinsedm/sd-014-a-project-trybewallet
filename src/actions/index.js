export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addEmailAC = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addCurrenciesAC = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const addCurrenciesThunk = () => async (dispatch) => {
  const res = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await res.json();
  const [usd, , ...others] = Object.keys(json);
  const currencies = [usd, ...others];
  dispatch(addCurrenciesAC(currencies));
};
