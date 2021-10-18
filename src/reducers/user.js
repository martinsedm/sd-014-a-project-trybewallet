// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  // password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      // password: action.payload.password,
    };
  default:
    return state;
  }
}

// const EMAIL_LOGIN = 'EMAIL_LOGIN';
// const PASSWORD_LOGIN = 'PASSWORD_LOGIN';

// function user(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case EMAIL_LOGIN:
//     return {
//       ...state,
//       email: action.payload.email,
//     };
//   case PASSWORD_LOGIN:
//     return {
//       ...state,
//       password: action.payload.password,
//     };
//   default:
//     return state;
//   }
// }

export default user;
