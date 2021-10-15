// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const WALLET_ACTION = 'WALLET_ACTION';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_ACTION:
    return { state: action.wallet };
  default:
    return state;
  }
}

export default wallet;
