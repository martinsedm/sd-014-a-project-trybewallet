// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const WALLET_CURRENCIES = 'WALLET_CURRENCIES';

const WALLET_EXPENSES = 'WALLET_EXPENSES';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case WALLET_EXPENSES:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}
export default wallet;
