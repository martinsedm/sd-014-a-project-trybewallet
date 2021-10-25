export const SEND_DATA = 'SEND_DATA';
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const submitLogin = (state) => ({ type: 'SEND_DATA', state });

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

// export const savePassword = (payload) => ({
//   type: SAVE_PASSWORD,
//   payload,
// });
