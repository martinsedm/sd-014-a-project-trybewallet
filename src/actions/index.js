// Coloque aqui suas actions
export const USER_CASE = 'USER_CASE';
export const WALLET_CASE = 'WALLET_CASE';

export function userAction(data) {
  return {
    type: USER_CASE,
    payload: data,
  };
}

export function walletAction(data) {
  return {
    type: WALLET_CASE,
    payload: data,
  };
}
