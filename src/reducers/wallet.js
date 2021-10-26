import { REQUEST_CURRENCIES, GET_CURRENCIES, FAILED_REQUEST,
  ADD_EXPENSE,
  UPDATE_TOTAL_EXPENSES } from '../redux/actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  totalExpenses: 0,
  nextExpenseId: 0,
  error: null,
  isFetching: false,
  response: {},
};

const calculateTotalExpenses = (expenses) => expenses.reduce(
  (total, { value, currency, exchangeRates }) => (
    total + (value * Number(exchangeRates[currency].ask))
  ), 0,
);

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.json, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.error, isFetching: false };
  case ADD_EXPENSE:
    return { ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.nextExpenseId },
      ],
      nextExpenseId: state.nextExpenseId + 1,
    };
  case UPDATE_TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: calculateTotalExpenses(state.expenses),
    };
  default:
    return state;
  }
}

export default wallet;
