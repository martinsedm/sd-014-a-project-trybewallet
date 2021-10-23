const fetchCurrencies = async () => {
  const currenciesRaw = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesData = await currenciesRaw.json();
  return currenciesData;
};

export default fetchCurrencies;
