async function fetchCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = Object.keys(await response.json());
  const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');
  return filteredCurrencies;
}

export default fetchCurrencies;
