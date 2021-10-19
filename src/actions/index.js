import thunk from "redux-thunk";

// Coloque aqui suas actions
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const UPDATE_WALLET_ACTION = 'UPDATE_WALLET_ACTION';

export const loginAction = (state) => ({ type: LOGIN_ACTION, state });

export const updateWallet = (state) => ({ type: UPDATE_WALLET_ACTION, state });

// export const getCurrenciesApiThunk() => (dispatch) => {

// }
