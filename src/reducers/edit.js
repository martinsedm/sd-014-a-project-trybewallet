import { INIT_EDIT } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  editing: false,
  idxEdit: 0,
};

const edit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INIT_EDIT:
    return ({
      ...state,
      editing: action.payload.editing,
      idxEdit: action.payload.idxEdit,
    });

  default:
    return state;
  }
};

export default edit;
