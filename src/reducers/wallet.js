import { EXPENSE, CURRENCIES } from '../actions';

const INICIAL_STATE = {
  expenses: [],
  currencies: [],
};

export default function walletReducer(state = INICIAL_STATE, { type, payload }) {
  switch (type) {
  case EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
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
