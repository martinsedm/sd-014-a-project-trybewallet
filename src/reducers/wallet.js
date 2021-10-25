// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API_MONEY_SUCCESS, ADD_NEW_EXPENSE, GET_API_MONEY_FAIL } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_API_MONEY_SUCCESS:
    return { ...state,
      currencies: action.payload,
    };
  case GET_API_MONEY_FAIL:
    return {
      ...state,
      error: true,
    };
  case ADD_NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
