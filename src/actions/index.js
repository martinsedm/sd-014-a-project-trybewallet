// Coloque aqui suas actions
export const EMAIL = 'EMAIL';

export function USER_EMAIL(payload) {
  return {
    type: EMAIL,
    payload,
  };
}
