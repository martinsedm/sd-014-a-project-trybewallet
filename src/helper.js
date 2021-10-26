export function emailValidation(email) {
  const emailRgx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRgx.test(email);
}

export function passwordValidation(password) {
  const MIN_LENGTH = 6;
  return password.length >= MIN_LENGTH;
}
