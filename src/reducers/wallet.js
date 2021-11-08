import { SAVE_ACTUAL_EXPENSE, DELETE_ACTUAL_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_ACTUAL_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],

    };
  case DELETE_ACTUAL_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => action.id !== expense.id),
      ],

    };

  default:
    return state;
  }
}
