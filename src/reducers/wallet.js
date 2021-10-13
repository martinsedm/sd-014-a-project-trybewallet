// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  total: 0,
};

export default function user(
  state = initialState, { payload, type },
) {
  switch (type) {
  case 'TOTAL':
    return ({
      ...state,
      total: payload,
    });

  default:
    return (state);
  }
}
