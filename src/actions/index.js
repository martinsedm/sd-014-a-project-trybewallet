// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
// export const WALLET = 'WALLET';

export const loginAction = (user) => ({
  type: LOGIN,
  payload: {
    ...user,
  },
});

// export const walletAction = () => ({
//   type: WALLET,
//   payload: {
//     ...
//   }
// })
