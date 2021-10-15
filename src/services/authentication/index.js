export const emailAuthentication = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const minLength = 6;

export const passwordAuthentication = (password) => password.length >= minLength;

// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
