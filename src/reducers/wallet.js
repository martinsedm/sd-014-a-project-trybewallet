// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  empty: '0',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'WALLET_USER':
    return {
      ...state,
      empty: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
