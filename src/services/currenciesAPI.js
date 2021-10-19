const currenciesApi = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const objJSON = await fetch(url);
  const result = await objJSON.json();
  return result;
};

export default currenciesApi;
