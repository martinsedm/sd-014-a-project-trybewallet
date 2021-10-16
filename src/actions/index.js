// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const setUserInfoAction = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});
