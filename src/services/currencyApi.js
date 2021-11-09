const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

const currencyApi = async () => {
  const request = await fetch(END_POINT);
  const response = await request.json();
  return response;
};

export default currencyApi;
