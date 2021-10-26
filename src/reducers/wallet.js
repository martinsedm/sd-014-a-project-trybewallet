import { GET_VALUE, GET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_VALUE:
    return { ...state, currencies: Object.keys(action.payload) }; // precisei transformar em array pra fazer o map
  case GET_EXPENSE:
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  default:
    return state;
  }
};
export default reducerWallet;
