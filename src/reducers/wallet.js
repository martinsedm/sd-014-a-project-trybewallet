import { UPDATE_CONTA } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
  case UPDATE_CONTA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  // case REMOVER_CONTA:
  //   return {
  //     ...state,
  //     expenses: [...state.expenses].filter((cur) => cur !== action.payload),
  //   };
  default:
    return state;
  }
};

export default wallet;
