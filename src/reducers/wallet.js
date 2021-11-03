import { SEND_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };

  default:
    return state;
  }
};

export default walletReducer;
