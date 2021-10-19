import requisicaoAPI from '../Services';

// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_MOEDAS = 'ADD_MOEDAS';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addDespesa = (payload) => ({
  type: ADD_DESPESA,
  payload,
});

export const addMoeda = (payload) => ({
  type: ADD_MOEDAS,
  payload,
});

thunk = () => async (dispatch) => {
  const response = await requisicaoAPI();
  console.log(response);
};
