// Coloque aqui suas actions ye

export const USER_REG = 'USER_REG';
export const QUERY_CURRENCY = 'QUERY_CURRENCY';

export const regUser = (payload) => ({
  type: USER_REG,
  payload,
});

export const currQuery = (payload) => ({
  type: QUERY_CURRENCY,
  payload,
});
