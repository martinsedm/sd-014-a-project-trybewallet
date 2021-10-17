import fetchAPI from '../helpers/fetchAPI';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveEmailInState = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const addExpenseAction = (formData) => async (dispatch) => {
  const { value, currency, method, tag, description } = formData;
  const exchangeRates = await fetchAPI();

  const rate = exchangeRates[currency].ask;

  const payload = {
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  };

  dispatch({
    type: ADD_EXPENSE,
    payload,
    rate,
  });
};
