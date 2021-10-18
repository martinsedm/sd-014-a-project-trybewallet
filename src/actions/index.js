import { getAllCoins } from '../services/economiaAwesomeAPI';

export const USER_LOGIN = 'USER_LOGIN';

export const GET_ALL_COINS_SUCCESS = 'GET_ALL_COINS_SUCCESS';
export const GET_ALL_COINS_FAIL = 'GET_ALL_COINS_FAIL';

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: user,
});

export const getAllCoinsSuccess = (payload) => ({
  type: GET_ALL_COINS_SUCCESS,
  payload,
});

export const getAllCoinsFail = () => ({
  type: GET_ALL_COINS_FAIL,
});

export const getAllCoinsThunk = () => async (dispatch) => {
  try {
    const response = await getAllCoins();
    const payload = Object.keys(response).filter((moeda) => moeda !== 'USDT');
    dispatch(getAllCoinsSuccess(payload));
  } catch (error) {
    dispatch(getAllCoinsFail());
  }
};
