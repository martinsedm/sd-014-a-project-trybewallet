const CURRENCY_URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrenciesFromApi = async () => {
  const response = await fetch(CURRENCY_URL);
  return (
    response.ok ? Promise.resolve(response.json()) : Promise.reject(response.json())
  );
};

export default getCurrenciesFromApi;
