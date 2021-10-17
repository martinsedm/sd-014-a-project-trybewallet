import { ADD_EMAIL } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIANDO_ESTADO = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INICIANDO_ESTADO, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
}

export default user;
