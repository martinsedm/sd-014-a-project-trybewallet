// Coloque aqui suas actions
export const LOG_USER = 'LOG_USER';

export const logUser = (payload) => (
  {
    type: LOG_USER, payload,
  }
);
