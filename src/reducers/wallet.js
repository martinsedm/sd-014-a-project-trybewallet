// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_ACTION, CURRENCY_ACTION } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case CURRENCY_ACTION:
    return { ...state, currencies: [...action.payload] };
  case EXPENSE_ACTION:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
