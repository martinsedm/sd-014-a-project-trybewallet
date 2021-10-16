// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  password: '',
};

const EMAIL_LOGIN = 'EMAIL_LOGIN';
const PASSWORD_LOGIN = 'PASSWORD_LOGIN';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_LOGIN:
    return {
      ...state,
      email: action.payload.email,
    };
  case PASSWORD_LOGIN:
    return {
      ...state,
      password: action.payload.password,
    };
  default:
    return state;
  }
}

export default user;
