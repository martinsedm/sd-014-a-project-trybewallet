// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    total: 0,
  },
};

const WALLET_CURRENCIES = 'WALLET_CURRENCIES';

const WALLET_EXPENSES = 'WALLET_EXPENSES';

function wallet(state = INITIAL_STATE, { type, payload, rate }) {
  switch (type) {
  case WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...payload }],
      total: state.total + 1 * (payload.value * rate),
    };
  default:
    return state;
  }
}
export default wallet;
