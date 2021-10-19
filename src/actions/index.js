import { getApiMoney } from '../services/getApiMoney';

// Coloque aqui suas actions
export const LOG_USER = 'LOG_USER';
export const WALLET_USER = 'WALLET_USER';
export const GET_API_MONEY_SUCCESS = 'GET_API_MONEY_SUCCESS';

export const logUser = (user) => (
  {
    type: LOG_USER, payload: user,
  }
);

export const walletUser = (payload) => (
  {
    type: WALLET_USER, payload,
  }
);

export const getApiMoneySuccess = (payload) => (
  {
    type: GET_API_MONEY_SUCCESS,
    payload,
  }
);

export const getApiMoneyThunk = () => async (dispatch) => {
  const response = await getApiMoney();
  const responseVali = Object.values(response);
  const payload = {
    currencies: Object.values(responseVali),
  };
  dispatch(getApiMoneySuccess(payload));
};
