// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REMOVE_EXPENSE, FETCHING, ADD_CURRENCIES } from '../actions';

const NEG_UM = -1;

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencyToExchange: 'BRL',
  expenses: [],
  currencies: [],
  // currObj: {},
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
  {
    const { expenses } = state;
    let id = expenses.length;
    if (expenses.find(({ id: idNumber }) => idNumber === id)) {
      const expensesCopy = expenses.map((x) => x);
      const expensesSort = expensesCopy.sort((a, b) => (a.id > b.id ? 1 : NEG_UM));
      const { id: idBigger } = expensesSort[id];
      id = idBigger + 1;
    }
    return {
      ...state,
      expenses: [...expenses, { ...action.payload, id }],
    };
  }
  case REMOVE_EXPENSE:
  {
    const { expenses } = state;
    const updatedExpenses = expenses.filter(({ id }) => id !== action.payload);
    return {
      ...state,
      expenses: [...updatedExpenses],
    };
  }
  case FETCHING:
    return {
      ...state,
      isFetching: !state.isFetching,
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  default:
    return state;
  }
};
export default wallet;
