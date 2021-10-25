export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (targetEmail) => ({
  type: SAVE_EMAIL,
  payload: targetEmail,
});
