import { ADD_EXPENSE, UPDATE_EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case UPDATE_EXPENSE:
    return { ...state,
      expenses: action.value,
    };
  default:
    return state;
  }
}

export default walletReducer;
