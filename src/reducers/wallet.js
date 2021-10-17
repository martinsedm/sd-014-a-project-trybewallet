import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  // FETCHING,
  ADD_CURRENCIES,
  EDIT_MODE,
  SAVE_EXPENSE,
  UPDATE_BY_LS } from '../actions';

const NEG_UM = -1;

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: {},
  currencyToExchange: 'BRL',
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
  {
    const { expenses } = state;
    let id = expenses.length;
    if (expenses.find(({ id: idNumber }) => idNumber === id)) {
      const expensesFiltered = expenses
        .map((x) => x).sort((a, b) => (a.id > b.id ? 1 : NEG_UM));
      id = expensesFiltered[id - 1] + 1;
    }
    return { ...state, expenses: [...expenses, { ...action.payload, id }],
    };
  }
  case SAVE_EXPENSE:
  {
    const { expenses } = state;
    const index = expenses.findIndex(({ id }) => id === action.payload.id);
    expenses[index] = { ...action.payload };
    return { ...state, expenses: [...expenses] };
  }
  case REMOVE_EXPENSE:
  {
    const { expenses } = state;
    const updatedExpenses = expenses.filter(({ id }) => id !== action.payload);
    return { ...state, expenses: [...updatedExpenses] };
  }
  case EDIT_MODE:
  {
    const { expenses } = state;
    const found = expenses.find(({ id }) => id === action.payload);
    return { ...state, editor: !state.editor, idToEdit: { ...found } };
  }
  // case FETCHING:
  //   return { ...state, isFetching: !state.isFetching };
  case ADD_CURRENCIES:
    return { ...state, currencies: [...state.currencies, ...action.payload] };
  case UPDATE_BY_LS:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};
export default wallet;
