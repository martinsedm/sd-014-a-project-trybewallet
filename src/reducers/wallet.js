import { TOTAL_EXPENSES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    total: 0,
  },
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case TOTAL_EXPENSES:
    return {
      ...state,
      total: payload,
    };
  default:
    return state;
  }
}

export default wallet;
