import { CHANGE_DESPESA, CHANGE_EXPENSES, CHANGE_CAMBIO } from '../actions';

const INITIAL_STATE = {
  despesa: 0,
  cambio: 'BRL',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_DESPESA:
    return {
      ...state,
      despesa: action.payload.despesa,
    };
  case CHANGE_EXPENSES:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  case CHANGE_CAMBIO:
    return {
      ...state,
      cambio: action.payload.cambio,
    };
  default:
    return state;
  }
}

export default wallet;
