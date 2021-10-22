const INITIALSTATE = { currencies: [] };

function walletReducer(state = INITIALSTATE, action) {
  switch (action.type) {
  case 'a':
    return { ...state, currencies: action.payload.currencies };
  default:
    return state;
  }
}
export default walletReducer;
