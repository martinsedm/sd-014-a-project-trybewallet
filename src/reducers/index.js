// import user from './user';
// import wallet from './wallet';
import LOG_IN from '../actions';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      ...state,
      user: {
        email: action.playload,
      },
    };
  default:
    return state;
  }
};

export default reducers;
