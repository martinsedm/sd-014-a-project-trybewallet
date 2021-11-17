import {
  GET_CURRENCIES_SUCCESS, NEW_EXPENSE, TOTAL_COST, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  expensesIdCounter: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object.entries(action.payload.currencies.data),
    };
  case NEW_EXPENSE: {
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expensesIdCounter,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,
      }],
      expensesIdCounter: state.expensesIdCounter + 1,
    };
  }
  case TOTAL_COST: {
    return {
      ...state,
      total: parseFloat(state.total) + parseFloat(action.payload.total),
    };
  }
  case REMOVE_EXPENSE: {
    const toBeRemovedElement = state.expenses
      .filter((expense) => expense.id === Number(action.payload.index))[0];
    const expenseCurrency = toBeRemovedElement.currency;
    console.log(state);
    return {
      ...state,
      total: state.total - (Math.round(Number(toBeRemovedElement
        .exchangeRates[expenseCurrency].ask) * Number(toBeRemovedElement.value)
         * 100) / 100),
      expenses: state.expenses.filter((expense) => expense !== toBeRemovedElement),
    };
  }
  default:
    return state;
  }
}

export default wallet;
