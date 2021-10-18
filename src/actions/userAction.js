export const USER_ACTION = 'USER_ACTION';

export const userAction = (user) => ({
  type: USER_ACTION,
  payload: user,
});
