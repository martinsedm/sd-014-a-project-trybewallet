import { SET_EXPENSES } from '../actions/index';

const INITIAL_EXPENSE_STATE = {
  expenses: [],
};

const wallet = (
  state = INITIAL_EXPENSE_STATE,
  action,
) => {
  switch (action.type) {
  case SET_EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
