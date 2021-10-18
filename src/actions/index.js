import coinApi from '../services/coinApi';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_COINS = 'SET_COINS';
export const SET_EXPENDITURE = 'SET_EXPENDITURE';

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
  dispatch(setCoins(coins));
};

export const setExpenditure = (expenditure) => ({
  type: SET_EXPENDITURE,
  payload: expenditure,
});
