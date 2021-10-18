// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const LOGGED = 'LOGGED';

export const addUserAction = (email) => ({

  type: ADD_USER,

  payload: {
    email,
  },

});

export const notifyLoginAction = (login) => ({

  type: LOGGED,

  payload: {
    login,
  },

});
