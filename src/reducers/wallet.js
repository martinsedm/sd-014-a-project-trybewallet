import { ADD_EXPENSE, RECEIVE_INSTANT_RATE, REQUEST_INSTANT_RATE } from '../actions';

const initialState = {
  expenses: [
  //   {

  //   // value: 0,
  // },
  ],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case REQUEST_INSTANT_RATE:
    return state;
  case RECEIVE_INSTANT_RATE:
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default walletReducer;
