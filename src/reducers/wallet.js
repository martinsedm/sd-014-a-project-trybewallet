import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, CURRENCIES } from '../actions';

const INICIAL_STATE = {
  expenses: [],
  currencies: [],
};

export default function walletReducer(state = INICIAL_STATE, { type, payload }) {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.id) {
          return { ...expense, ...payload };
        }
        return expense;
      }),
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(payload)),
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
