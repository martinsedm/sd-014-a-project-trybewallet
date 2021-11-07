// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CHANGE_WALLET, ADD_EXPENSES, OVERWRITE_EXPENSES } from '../actions';

const INITIAL_STATE = {

  currencies: [],

  expenses: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_WALLET:

    return {
      ...state,
      currencies: action.wallet.currencies,
    };

  case ADD_EXPENSES:
  {
    const { expenses } = state;
    // console.log(action);
    const id = expenses.length;
    return { ...state, expenses: [...expenses, { ...action.expenses, id }] };
  }

  case OVERWRITE_EXPENSES: {
    const { payload } = action;
    console.log(payload);
    return { ...state, expenses: payload };
  }

  default:

    return state;
  }
}

export default wallet;
