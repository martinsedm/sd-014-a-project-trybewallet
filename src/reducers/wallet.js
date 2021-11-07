import { FETCH_SUCESS,
  FETCH_FAIL, FETCH_EXPENSE, EXPENSE_TOTAL, REMOVER_TABELA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  expenseID: 0,
  expenseTotal: 0,
};

const calculoExpenseTotal = (expenses) => expenses.reduce(
  (total, { value, currency, exchangeRates }) => (
    total + (Number(value) * Number(exchangeRates[currency].ask))
  ), 0,
);

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REMOVER_TABELA:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  case FETCH_SUCESS:
    return {
      ...state,
      currencies: action.payload,
      error: null,
    };
  case FETCH_FAIL:
    return {
      ...state,
      error: action.payload,
    };
  case FETCH_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenseID, ...action.payload },
      ],
      expenseID: state.expenseID + 1,
    };
  case EXPENSE_TOTAL:
    return {
      ...state,
      expenseTotal: calculoExpenseTotal(state.expenses),
    };
  default:
    return state;
  }
};

export default walletReducer;
