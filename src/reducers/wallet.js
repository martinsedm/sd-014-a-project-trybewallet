// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isLoading: false,
};

export default function wallet(state = INITIAL_STATE, { type }) {
  switch (type) {
  default:
    return state;
  }
}
