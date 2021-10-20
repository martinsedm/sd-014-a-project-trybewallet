export const USER = 'USER';
export const WALLET = 'WALLET';

export const userLogin = (action) => ({
  type: USER,
  email: action,
});
