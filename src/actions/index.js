export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_PASSWORD = 'SAVE_PASSWORD';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const savePassword = (payload) => ({
  type: SAVE_PASSWORD,
  payload,
});
