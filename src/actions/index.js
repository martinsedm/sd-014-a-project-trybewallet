// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_MOEDAS = 'ADD_MOEDAS';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addDespesa = (despesa) => ({
  type: ADD_DESPESA,
  despesa,
});

export const addMoeda = (moeda) => ({
  type: ADD_MOEDAS,
  moeda,
});

export const requisicaoAPI = async () => {
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await endpoint.json();
  const data = response;
  this.setState({
    dataAPI: data,
  });
};
