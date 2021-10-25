// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies)
        .filter((i) => i !== 'USDT'),
    };
  default:
    return state;
  }
}
