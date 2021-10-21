export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_DISPENSES = 'ADD_DISPENSES';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    email,
  };
}

export function addDispenses(dispenses) {
  return {
    type: ADD_DISPENSES,
    dispenses,
  };
}
