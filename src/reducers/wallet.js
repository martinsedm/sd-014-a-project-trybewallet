// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case tipo1:
  //  return {
  //     ...state,
  //     chave1: action.payload.chave1,
  //   }
  default:
    return state;
  }
};

export default walletReducer;
