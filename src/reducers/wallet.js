// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  UPDATE_WALLET_ACTION,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  despesas: 0,
};

let total = 0;

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_WALLET_ACTION:
    total += state.despesas;
    console.log(state.wallet);
    return {
      ...state,
      currencies: action.state.currency,
      expenses: [...state.expenses, action.state],
      despesas: total + parseFloat(action.total.toFixed(2)),
    };
  default:
    return state;
  }
}

export default user;
