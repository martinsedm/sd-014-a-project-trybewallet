const checkEmail = (value) => {
  const regex = new RegExp(/^([\w-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w-]{2,3})$/); // fonte dessa expresão https://www.devmedia.com.br/iniciando-expressoes-regulares/6557
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
