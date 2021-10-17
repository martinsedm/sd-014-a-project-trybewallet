import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, { type, payload, rate }) {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length, ...payload,
      }],
      total: state.total + 1 * (payload.value * rate),
    };
  default:
    return state;
  }
}

export default wallet;
