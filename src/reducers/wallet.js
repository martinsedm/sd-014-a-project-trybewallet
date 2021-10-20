// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: payload,
    };
  case 'ADD_NEW_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...payload }],
    };
  default:
    return state;
  }
};

export default wallet;
