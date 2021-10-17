import { ADD_DESPESA } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case ADD_DESPESA:
    return {
      ...state,
      payload: {
        expenses: [], // entender como passar a action com a informação.
      },
    };
  default:
    return state;
  }
}

export default wallet;
