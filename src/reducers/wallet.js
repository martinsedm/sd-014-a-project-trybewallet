import { API_SUCCESS, API_FAILURE, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case API_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  default:
    return state;
  }
};

export default wallet;
