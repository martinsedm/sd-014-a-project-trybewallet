// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_DESPESA = 'ADD_DESPESA';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addDespesa = (despesa) => ({
  type: ADD_DESPESA,
  payload: {
    currencies: [], // nao sei exatamente o que colocar aqui..
    expenses: [],
  },
});
