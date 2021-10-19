export const USER_EMAIL = 'USER_EMAIL';

export const userEmailAction = (email) => ({
  type: USER_EMAIL,
  payload: {
    email,
  },
});
