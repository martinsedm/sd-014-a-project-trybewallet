export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENCIES = 'ADD_EXPENCIES';

export const userLoginAction = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addExpenciesAction = (state, payload) => ({
  type: ADD_EXPENCIES,
  expencies: [
    ...state, payload,
  ],
});
