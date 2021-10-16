// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'oi':
    return { ...state, email: action.email };
  default:
    return { state };
  }
};

export default wallet;
