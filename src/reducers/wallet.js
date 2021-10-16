// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  EXPENSE_CONSTRUCTOR,
  TOTAL_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state, currencies: payload,
    };
  case GET_CURRENCIES_ERROR:
    return state;
  case EXPENSE_CONSTRUCTOR:
    return {
      ...state, expenses: [...state.expenses, payload],
    };
  case TOTAL_EXPENSE:
    return {
      ...state, totalExpense: payload,
    };
  default:
    return state;
  }
};

export default wallet;
