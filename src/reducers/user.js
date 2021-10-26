// Esse reducer será responsável por tratar as informações da pessoa usuária

const LOGIN = 'LOGIN';

const USER_INITIALSTATE = {
  user: {
    email: '',
    senha: '',
  },
};

const user = (state = USER_INITIALSTATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { email: action.email, senha: action.senha };
  default:
    return state;
  }
};

export { user, LOGIN };
