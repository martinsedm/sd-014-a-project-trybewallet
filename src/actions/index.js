import requisicaoAPI from '../Services/economiaAPI';

// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_MOEDAS = 'ADD_MOEDAS';
export const ADD_MODEDA_ERROR = 'ADD_MODEDA_ERROR';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addDespesa = (payload) => ({
  type: ADD_DESPESA,
  payload,
});

export const addMoedaSucesso = (payload) => ({
  type: ADD_MOEDAS,
  payload,
});

export const addMoedaError = (payload) => ({
  type: ADD_MODEDA_ERROR,
  payload,
});

export const getAPIThunk = () => async (dispatch) => {
  try {
    const response = await requisicaoAPI();
    dispatch(addMoedaSucesso(response));
  } catch (error) {
    dispatch(addMoedaError(error));
  }
};
