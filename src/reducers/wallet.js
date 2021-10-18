import { CHANGE_WALLET } from '../actions';

const INITIAL_STATE = {
  despesa: 0,
  cambio: 'BRL',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_WALLET:
    return {
      ...state,
      despesa: action.payload.despesa,
      cambio: action.payload.cambio,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
