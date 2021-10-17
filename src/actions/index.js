export const ADD_USER = 'ADD_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: {
    email,
  },
});

export const changeWallet = (despesa, cambio) => ({
  type: CHANGE_WALLET,
  payload: {
    despesa,
    cambio,
  },
});
