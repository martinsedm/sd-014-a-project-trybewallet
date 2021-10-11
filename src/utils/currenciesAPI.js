const CURRENCY_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const getExchangeRates = async () => {
  const result = await fetch(CURRENCY_ENDPOINT);
  return result.json();
};

const getCurrencies = async () => {
  const rates = await getExchangeRates();
  return Object.keys(rates).filter((rate) => rate !== 'USDT');
};

export { getCurrencies, getExchangeRates };
