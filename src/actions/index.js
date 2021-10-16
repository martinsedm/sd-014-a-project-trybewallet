// Coloque aqui suas actions
export const GET_EMAIL_USER = 'GET_EMAIL_USER';

export const getEmailUser = (email) => (
  {
    type: GET_EMAIL_USER,
    payload: { email },
  }
);
