// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_WALLET_ACTION } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  despesas: 0,
};

let total = 0;

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_WALLET_ACTION:
    total += ((action.state.valor
        * action.state.exchangeRates[action.state.moeda].ask) || 0);
    console.log(action.state);
    return {
      ...state.wallet,
      currencies: action.state.moeda,
      expenses: action.state,
      despesas: total.toFixed(2),
    };
  default:
    return state;
  }
}

export default user;
