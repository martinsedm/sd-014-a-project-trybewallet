const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrenciesApi = async () => {
  const reponse = await fetch(END_POINT);
  const responseJson = await reponse.json();

  return responseJson;
};

export default getCurrenciesApi;
