import { 
  REQUEST_FAIL,
  REQUEST_START,
  REQUEST_SUCCESS,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE_END,
  EDIT_EXPENSE_START,
  WALLET_INITIAL_STATE
} from "../services/noMagicStuff";


export default function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_START:
    return { ...state, isLoading: true };
  case REQUEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: [...Object.keys(action.currencies)],
    };
  case REQUEST_FAIL:
    return { ...state, isLoading: false, error: action.error };
  case SAVE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.expense.id),
      ],
      isEditing: false,
    };
  case EDIT_EXPENSE_START:
    return { ...state, isEditing: true, expenseId: action.expense.id };
  case EDIT_EXPENSE_END:
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === action.expense.id) return { ...item, ...action.expense };
        return item;
      }),
      isEditing: false,
    };
  default:
    return state;
  }
}