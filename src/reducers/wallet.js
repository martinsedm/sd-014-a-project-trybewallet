const initialWalletValue = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case wallet:
    return { ...state, wallet: payload };
  default:
    return state;
  }
}
