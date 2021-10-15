// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, { type /*  payload */ }) => {
  switch (type) {
  default:
    return state;
  }
};

export default userReducer;
