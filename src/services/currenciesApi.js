const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const currenciesApi = async () => {
  const reponse = await fetch(END_POINT);
  const responseJson = await reponse.json();

  return responseJson;
};

export default currenciesApi;
