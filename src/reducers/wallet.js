import {
  REQUEST_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_FORM,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditing: false,
  edit: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE: {
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  }
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(action.payload)),
    };
  case EDIT_FORM:
    return {
      ...state,
      isEditing: true,
      edit: state.expenses.find((expense) => expense.id === Number(action.payload)),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }

        return expense;
      }),
      edit: {},
    };
  default:
    return state;
  }
};

export default wallet;
