export const SET_USER = 'SET_USER';

export const setUser = (email) => ({
  type: SET_USER,
  payload: { email },
});
