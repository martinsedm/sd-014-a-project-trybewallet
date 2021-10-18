import { LOGIN_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
  method: ['Dinheiro', 'Cartão de débito', 'Cartão de crédito'],
  tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOGIN_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default user;
