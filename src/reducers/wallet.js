// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],

};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:

    return {

      ...state,

      currencies: action.payload.currencies,

    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload.expense,
      ],
    };

  default:

    return state;
  }
};

export default walletReducer;
