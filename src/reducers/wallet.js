import { REQUEST_API } from '../actions/actionTypes';
import { ERASE_EXPENSE, ERASE_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.state,
          exchangeRates: action.payload,
        },
      ],
    };
    case ERASE_EXPENSE:
      return ({
        ...state,
        expenses: state.expenses.filter((exp) => exp !== action.payload),
      });
    case ERASE_TOTAL:
      return { ...state, total: state.total - action.payload };
  default:
    return state;
  }
}

export default wallet;
