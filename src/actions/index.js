import requestApi from '../Utility';

export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const SEND_CURRENCY = 'SEND_CURRENCY';

export const sendCurrency = (response) => ({
  type: SEND_CURRENCY,
  payload: response,
});

export const sendCurrencyThunk = () => async (dispatch) => {
  const responseThunk = await requestApi();
  dispatch(sendCurrency(responseThunk));
};
