import { ADD_EXPENCIES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENCIES:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
};
export default walletReducer;
