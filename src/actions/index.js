// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload,
  };
}
