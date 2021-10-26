import { ADD_EXPENSE, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = { currencies: [], expenses: [] };

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
