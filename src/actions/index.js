// Coloque aqui suas actions
export const SELECT_USER = 'SELECT_USER';
export const VALOR_MOEDAS = 'VALOR_MOEDAS';

export const selectUser = (email) => ({
  type: SELECT_USER,
  payload: {
    email,
  },
});

export const valorMoedas = (payload) => ({
  type: VALOR_MOEDAS,
  payload,
});
