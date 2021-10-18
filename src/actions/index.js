export const ADD_EMAIL = 'ADD_EMAIL';

function addEmail(email) {
  return {
    type: ADD_EMAIL,
    email,
  };
}

export default addEmail;
