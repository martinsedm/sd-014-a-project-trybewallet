// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  API_SUCESS,
  API_ERROR,
  ADD_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS:
    return { ...state, currencies: action.payload };
  case API_ERROR:
    return { ...state, error: true };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.expense },
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
