// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 1:
    return {};
  default:
    return state;
  }
}

export default wallet;
