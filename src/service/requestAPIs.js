const LINK_API_CURRENCIES = 'https://economia.awesomeapi.com.br/json/all';

const apiCurrencies = async () => {
  const fetchApi = await fetch(LINK_API_CURRENCIES);
  const response = await fetchApi.json();
  return response;
};

export default apiCurrencies;
