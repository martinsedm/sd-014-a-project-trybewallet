import { SEND_CURRENCY, SEND_VALUE_EXPENSES, DELETE_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};
// atualizando o meu estado currencies com o payload da action SEND_CURRENCY
const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case SEND_VALUE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: [...action.payload],
    });

  default:
    return state;
  }
};

export default walletReducer;
