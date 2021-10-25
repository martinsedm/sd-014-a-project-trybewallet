// import { } from '../actions';

const INITIAL_STATE = {
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case modelo:
    return {
      ...state, modelo: payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
