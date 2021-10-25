export const USER = 'USER';
export const WALLET = 'WALLET';

export const loginAction = (data) => ({
  type: USER,
  payload: data,
});
