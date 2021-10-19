const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = async () => {
  const moedas = await fetch(url);
  const result = await moedas.json();
  return result;
};

const createOptions = async () => {
  const rates = await fetchAPI();
  return Object.keys(rates).filter((key) => key !== 'USDT');
};

export { fetchAPI, createOptions };
