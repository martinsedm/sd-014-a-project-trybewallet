import fetchAPI from '../../utils/getRatesAPI';

export const actionTypes = {
  SAVE_EMAIL: 'SAVE_EMAIL',
  SAVE_EXPENSES: 'SAVE_EXPENSES',
};

export const saveEmailAtState = (payload) => ({
  type: actionTypes.SAVE_EMAIL,
  payload,
});

export const saveExpensesAtState = (formState) => async (dispatch) => {
  const { value,
    currency,
    method,
    tag,
    description } = formState;

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
    type: actionTypes.SAVE_EXPENSES,
    payload,
    rate,
  });
};
