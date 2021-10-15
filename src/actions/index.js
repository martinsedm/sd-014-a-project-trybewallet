// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';

export const userAction = (email) => (
  {
    type: USER_ACTION,
    payload: email,
  }
);
