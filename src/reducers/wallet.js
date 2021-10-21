// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, OVERWRITE_EXPENSES, QUERY_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],

};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case QUERY_CURRENCY:
    return { ...state, ...action.payload };
  case ADD_EXPENSE:
  {
    const { expenses } = state;
    // console.log(action);
    const id = expenses.length;
    return { ...state, expenses: [...expenses, { ...action.payload, id }] };
  }
  case OVERWRITE_EXPENSES: {
    const { payload } = action;
    console.log(payload);
    return { ...state, expenses: payload }

  }
  default:
    return state;
  }
};

export default walletReducer;
