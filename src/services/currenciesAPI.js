const currenciesAPI = async () => {
  const apiUrl = 'https://economia.awesomeapi.com.br/json/all';
  const endPoint = await fetch(apiUrl);
  const response = await endPoint.json();
  return response;
};

export default currenciesAPI;
