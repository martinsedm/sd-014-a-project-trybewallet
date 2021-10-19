import coinApi from '../services/coinApi';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_COINS = 'SET_COINS';
export const SET_EXPENDITURE = 'SET_EXPENDITURE';
export const DELETE_EXPENDITURE = 'DELETE_EXPENDITURE';
export const SET_CUR_EXPENDITURE = 'SET_CUR_EXPENDITURE';
export const EDIT_EXPENDITURE = 'EDIT_EXPENDITURE';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setCoins = (coins) => ({
  type: SET_COINS,
  payload: coins,
});

export const fetchCoins = () => async (dispatch) => {
  // dispatch(uma action de loading)
  const coins = await coinApi();
  dispatch(setCoins(Object.keys(coins)));
};

export const setExpenditure = (expenditure) => async (dispatch) => {
  const exchangeRates = await coinApi();
  dispatch({
    type: SET_EXPENDITURE,
    payload: { ...expenditure, exchangeRates },
  });
};

export const deleteExpenditure = (id) => ({
  type: DELETE_EXPENDITURE,
  payload: id,
});

export const setCurExpenditure = (id) => ({
  type: SET_CUR_EXPENDITURE,
  payload: id,
});

export const editExpenditure = (expenditure) => ({
  type: EDIT_EXPENDITURE,
  payload: expenditure,
});
