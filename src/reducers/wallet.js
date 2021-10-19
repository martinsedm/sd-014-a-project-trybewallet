// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default wallet;
