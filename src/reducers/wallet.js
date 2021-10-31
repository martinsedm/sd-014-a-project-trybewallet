import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  GET_CURRENCIES,
  REMOVE_EXPENSE,
  SET_TO_EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  editId: null,
  expenses: [],
  isEditing: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length },
      ],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editId: null,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return { ...expense, ...action.payload };
        }
        return expense;
      }),
      isEditing: false,
    };
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload,
      ),
    };
  case SET_TO_EDIT_EXPENSE:
    return {
      ...state,
      editId: action.payload,
      isEditing: true,
    };
  default:
    return state;
  }
};

export default wallet;
