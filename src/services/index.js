export function emailValidation(email) {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

export function passwordValidation(password) {
  const MIN_PW_LENGTH = 6;
  return password.length >= MIN_PW_LENGTH;
}

export function getCurrencyName(expense) {
  return expense.exchangeRates[expense.currency].name.split('/')[0];
}

export function getAskValue(expense) {
  return Number(expense.exchangeRates[expense.currency].ask).toFixed(2);
}

export function getFinalValue(expense) {
  return (expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2);
}

export const methodList = [
  '',
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

export const expenseCatList = [
  '',
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];
