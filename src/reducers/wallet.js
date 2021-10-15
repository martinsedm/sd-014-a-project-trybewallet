import { ADD_EXPENSE } from '../actions';

// const initialState = {
//   currencies: [],
//   expenses: [{
//     currencyInitials: [],
//     id: 0,
//     value: '',
//     description: '',
//     currency: 'USD',
//     payment: 'Dinheiro',
//     tag: 'Alimentação',
//     exchangeRates: '',
//   }],
// };
const initialState = [];

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return [...state, action.value];
  default:
    return state;
  }
}

export default walletReducer;
