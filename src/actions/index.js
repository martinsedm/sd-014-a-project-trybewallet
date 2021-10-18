// Coloque aqui suas actions
export const SELECT_USER = 'SELECT_USER';

export const selectUser = (email) => ({
  type: SELECT_USER,
  payload: {
    email,
  },
});
