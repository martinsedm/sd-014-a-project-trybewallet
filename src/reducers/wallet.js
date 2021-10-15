const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expenses,
          exchangeRates: action.currencies,
          id: state.expenses.length,
        },
      ],
    };
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: [
        ...state.currencies,
        ...action.currenciesList,
      ],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((exp) => exp.id !== action.id),
      ],
    };
  case 'UPDATE_EXPENSES':
    return {
      ...state,
      expenses: [
        ...action.expenses,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
