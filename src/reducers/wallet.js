import { SAVE_WALLET } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_WALLET_STATE = {
  expenses: [],
};

const wallet = (
  state = INITIAL_WALLET_STATE,
  action,
) => {
  switch (action.type) {
  case SAVE_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.payload.expenses }],
    };
  default:
    return state;
  }
};

export default wallet;
