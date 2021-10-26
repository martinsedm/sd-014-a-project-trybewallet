export function emailValidation(email) {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

export function passwordValidation(password) {
  const MIN_LENGTH = 6;
  return password.length > MIN_LENGTH;
}
