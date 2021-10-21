// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER, GET_API_MONEY_SUCCESS, ADD_NEW_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  proximoId: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_USER:
    return { ...state, currencies: action.payload };
  case GET_API_MONEY_SUCCESS:
    return { ...state,
      currencies: action.payload.currencies,
    };
  case ADD_NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.proximoId },
      ],
      proximoId: state.proximoId + 1,
    };
  default:
    return state;
  }
};

export default wallet;
