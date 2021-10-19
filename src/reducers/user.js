// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 1:
    return {};
  default:
    return state;
  }
}

export default user;
