// Coloque aqui suas actions
// action possui sempre uma propriedade type única. Essa propriedade é utilizada pelo Redux para identificar a ação que será realizada, esse conceito recebe o nome de action type .

export const SET_EMAIL = 'SET_EMAIL';

export const setEmailValue = (payload) => (
  {
    type: SET_EMAIL, payload,
  });
