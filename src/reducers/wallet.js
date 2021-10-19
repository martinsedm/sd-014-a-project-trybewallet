import {
  SET_COINS,
  SET_EXPENDITURE,
  DELETE_EXPENDITURE,
  SET_CUR_EXPENDITURE,
  EDIT_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditing: false,
  curExpenditure: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENDITURE:
    return {
      ...state,
      isEditing: false,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload,
        },
      ],
    };
  case DELETE_EXPENDITURE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case SET_CUR_EXPENDITURE:
    return {
      ...state,
      isEditing: true,
      curExpenditure: state.expenses.find((cur) => cur.id === action.payload),
    };
  case EDIT_EXPENDITURE:
    return {
      ...state,
      isEditing: false,
      curExpenditure: {},
      expenses: state.expenses.reduce((acc, cur) => {
        const { payload } = action;
        if (cur.id === payload.id) return [...acc, payload];
        return [...acc, cur];
      }, []),
    };
  default:
    return state;
  }
};

export default wallet;
