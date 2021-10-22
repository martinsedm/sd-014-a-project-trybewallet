// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case 'GET_CURR':
    return {
      ...state,
      currencies: action.data,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.exp],
    };
  default:
    return state;
  }
}
