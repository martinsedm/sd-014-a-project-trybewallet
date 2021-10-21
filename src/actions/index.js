// Coloque aqui suas actions
export const USER_EMAIL_TYPE = 'USER_EMAIL_TYPE';

export const sendLoginInformation = (payload) => ({
  type: USER_EMAIL_TYPE,
  payload,
});
