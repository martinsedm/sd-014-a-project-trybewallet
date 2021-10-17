const checkEmail = (value) => {
  const regex = new RegExp(/^([a-z\d.-]+)@([a-z\d.-]+)$/);
  return regex.test(value);
};

const checkPassword = (value) => {
  const MIN_LENGTH = 6;
  return value.length >= MIN_LENGTH;
};

const EMAIL = 'email';
const PASSWORD = 'password';

const formValidation = (name, value) => {
  switch (name) {
  case EMAIL:
    return checkEmail(value);
  case PASSWORD:
    return checkPassword(value);
  default:
    return null;
  }
};

export default formValidation;
