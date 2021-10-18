import { ADD_CURRENCIES, ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [payload], // analisar formato que sera passado para action
    };

  default:
    return state;
  }
};

export default wallet;
