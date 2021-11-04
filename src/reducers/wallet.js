import { EXPENSE, CURRENCIES } from '../actions';

const INICIAL_STATE = {
  expenses: 0,
  currencies: [],
};

export default function walletReducer(state = INICIAL_STATE, { type, payload }) {
  switch (type) {
  case EXPENSE:
    return {
      ...state,
      expenses: payload,
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  default:
    return state;
  }
}
