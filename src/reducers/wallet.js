// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, { type /*  payload */ }) => {
  switch (type) {
  default:
    return state;
  }
};

export default walletReducer;
