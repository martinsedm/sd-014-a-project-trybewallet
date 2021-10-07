// Referência para o Regex e função teste
// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const SIX = 6;

export const emailVerification = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const passwordVerification = (password) => password.length >= SIX;
