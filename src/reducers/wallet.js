import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, FINISH_EDIT } from '../actions';

const initialState = {
  expenses: [],
  isEditing: false,
  expenseBeingEdited: [{ id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Alimentação',
    exchangeRates: [] }],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case REMOVE_EXPENSE:
    return { ...state,
      expenses: action.value,
    };
  case EDIT_EXPENSE:
    return { ...state,
      isEditing: true,
      expenseBeingEdited: action.value,
    };
  case FINISH_EDIT:
    return { ...state,
      isEditing: false,

    };
  default:
    return state;
  }
}

export default walletReducer;
