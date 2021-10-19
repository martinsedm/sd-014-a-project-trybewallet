// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXPENSES } from '../actions';

const INITIAL_STATE = [{
  id: 0,
  value: '3',
  description: 'Hot Dog',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
}];

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EXPENSES:
    return {
      ...state,
    };

  default:
    return state;
  }
}

export default wallet;
