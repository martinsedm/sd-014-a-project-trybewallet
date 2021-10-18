export const actionTypes = {
  SAVE_EMAIL: 'SAVE_EMAIL',
};

export const saveEmailAtState = (payload) => ({
  type: actionTypes.SAVE_EMAIL,
  payload,
});
