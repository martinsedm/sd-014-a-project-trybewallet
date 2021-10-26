export const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrency = async (endpoint) => {
  const response = await fetch(endpoint);
  const currencies = await response.json();
  delete currencies.USDT;
  return currencies;
};

export const convertToBRL = (expense) => {
  const { value, currency, exchangeRates } = expense;
  const { ask } = exchangeRates[currency];
  const valueInBRL = Number(value * ask).toFixed(2);
  return +valueInBRL;
};
