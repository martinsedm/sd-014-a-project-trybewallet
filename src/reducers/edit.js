const edit = (state = { isEditing: false, expense: {} }, action) => {
  switch (action.type) {
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expense: { ...action.expense },
      isEditing: !state.isEditing,
    };
  case 'EDIT_INPUT':
    return {
      ...state,
      expense: { ...state.expense, ...action.input },
    };
  default:
    return state;
  }
};

export default edit;
