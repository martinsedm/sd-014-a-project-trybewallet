export const LOGIN_TYPE = 'LOGIN_TYPE';
export const ADD_WALLET = 'ADD_WALLET';

export const notifyLoginAction = (user) => ({
  type: LOGIN_TYPE,
  payload: {
    ...user,
  },
});

export const addExpenseAction = (expense) => ({
  type: ADD_WALLET,
  payload: {
    ...expense,
  },
});

// actions assíncronas:
// export const myAsyncFunctionAction = () => {
//   return (dispatch) => {
//     dispatch(mySomeNotifyAction());
//     return fetch('any_endpoint')
//       .then((response) => response.json()
//   .then(
//           (json) => dispatch(myFunctionAction(json)),
//         ));
//   };
// }
