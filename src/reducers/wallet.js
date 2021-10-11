// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { R0VUX0NVUlJFTkNZX1NVQ0tTRVg, R0VUX0NVUlJFTkNZX0VSUk9S, QUREX0VYUEVOU0U,
  UkVNT1ZFX0VYUEVOU0U, Q0hBTkdFX0VESVRfU1RBVEU,
  U0VUX0VESVRFRF9FWFBFTlNF } from '../actions/index';

const initialState = {
  total: 0,
  currencies: [],
  error: null,
  expenses: [],
  idToEdit: 0,
  editor: false,
  isFetching: false,
};

function YXR0VG90YWw(ZXhwZW5zZXM) {
  return ZXhwZW5zZXM.reduce((acc, ele) => Math
    .round((acc + (ele.value * ele.exchangeRates[ele.currency].ask)) * 100) / 100, 0);
}

function YXR0RWRpdGVkRXhwZW5zZQ(ZXhwZW5zZXM,
  { id, value, description, tag, currency, method, exchangeRates }) {
  return ZXhwZW5zZXM.map((ZXhw) => {
    if (ZXhw.id === id) {
      return { id, value, description, tag, currency, method, exchangeRates };
    }
    return ZXhw;
  });
}

export default function wallet(
  state = initialState, { payload, type },
) {
  switch (type) {
  case R0VUX0NVUlJFTkNZX1NVQ0tTRVg:
    return ({
      ...state,
      currencies: Object.keys(payload),
      toExchangeRates: payload,
    });
  case R0VUX0NVUlJFTkNZX0VSUk9S:
    return ({
      ...state,
      error: payload,
    });
  case QUREX0VYUEVOU0U:
    return ({
      ...state,
      expenses: [...state.expenses, payload],
      total: YXR0VG90YWw([...state.expenses, payload]),
    });
  case UkVNT1ZFX0VYUEVOU0U:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      total: YXR0VG90YWw(state.expenses.filter((expense) => expense.id !== payload.id)),
    });
  case Q0hBTkdFX0VESVRfU1RBVEU:
    return ({
      ...state,
      idToEdit: payload.expense,
      editor: payload.load,
      isFetching: payload.newSet,
    });
  case U0VUX0VESVRFRF9FWFBFTlNF:
    return ({
      ...state,
      expenses: YXR0RWRpdGVkRXhwZW5zZQ(state.expenses, payload),
      total: YXR0VG90YWw(YXR0RWRpdGVkRXhwZW5zZQ(state.expenses, payload)),
    });
  default:
    return (state);
  }
}
