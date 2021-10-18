// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET':
    return { ...state, currencies: action.currencies, expenses: action.expenses };
  default:
    return state;
  }
}

export default walletReducer;
