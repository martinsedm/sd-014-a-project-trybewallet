// Coloque aqui suas actions
export const UP_EMAIL = 'UP_EMAIL';
export const UPDATE_CONTA = 'UPDATE_CONTA';
export const REMOVER_CONTA = 'REMOVER_CONTA';

export const gravaEmail = (payload) => ({
  type: UP_EMAIL,
  payload,
});

export const gravaConta = (payload) => ({
  type: UPDATE_CONTA,
  payload,
});

export const removeConta = (payload) => ({
  type: REMOVER_CONTA,
  payload,
});
