// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isLoading: false,
};

export default function user(state = INITIAL_STATE, { type }) {
  switch (type) {
  default:
    return state;
  }
}
