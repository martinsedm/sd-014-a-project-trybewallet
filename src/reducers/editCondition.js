import { SET_EDIT_CONDITION } from '../actions';

const INITIAL_STATE = {
  editCondition: false,
};

const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EDIT_CONDITION:
    return { ...state, editCondition: action.condition, expense: action.expense };
  default:
    return state;
  }
};

export default editReducer;
