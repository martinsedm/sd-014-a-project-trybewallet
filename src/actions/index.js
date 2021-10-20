export const VALID_EMAIL = 'VALID_EMAIL';

export const saveLogin = (email) => (
  {
    type: VALID_EMAIL,
    email,
  }
);
