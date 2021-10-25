import { ADD_EXPENCIES, SET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENCIES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          // esse trecho do código consegui entender e implementar usando o código do Ilan Aragão como refere
          id: state.expenses.length,
          ...action.payload,
        },
      ],
    };
  case SET_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((currency) => currency !== 'USDT'), // logica tirada e entendia a partir do estudo do https://pt.stackoverflow.com/questions/241823/como-remover-um-item-de-um-array-sem-conhecer-o-%C3%ADndice-apenas-o-valor
    };
  default:
    return state;
  }
};
export default walletReducer;
