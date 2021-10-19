// referencia regex email:
// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
// obrigada Fernando Oliveira

export function verifyEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

const PASSWORD_MIN_LENGTH = 6;
export const verifyPassword = (password) => password.length >= PASSWORD_MIN_LENGTH;
