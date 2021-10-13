// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  total: '',
};

export default function user(
  state = initialState, { payload, type },
) {
  switch (type) {
  case 'TOTAL':
    return ({
      ...state,
      email: payload,
    });

  default:
    return (state);
  }
}
