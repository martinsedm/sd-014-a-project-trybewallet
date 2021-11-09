const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrency = async () => {
  const result = await fetch(ENDPOINT);
  const jsonResult = await result.json();
  return jsonResult;
};

export const fetchWithout = async () => {
  const result = await fetchCurrency();
  return Object.keys(result).filter((name) => name !== 'USDT');
};
