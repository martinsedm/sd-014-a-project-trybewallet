// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'THIS_IS_A_MOCK':
    return [...state, action.value];

  default:
    return state;
  }
};

export default userReducer;
