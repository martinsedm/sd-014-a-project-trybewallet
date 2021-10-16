const CURRENCY_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencyAPI = async () => {
  const response = await fetch(CURRENCY_BASE_API);
  const json = await response.json();
  return json;
};

export default getCurrencyAPI;
