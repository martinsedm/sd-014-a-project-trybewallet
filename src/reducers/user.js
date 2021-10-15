// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const LOGIN_ACTION = 'LOGIN_ACTION';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return { state: action.user };
  default:
    return state;
  }
}

export default user;
