export const USER = 'USER';
export const WALLET = 'WALLET';

export const userLogin = (email) => ({
  type: USER,
  email,
});
