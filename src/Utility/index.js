const requestApi = async () => {
  const responseRaw = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await responseRaw.json();
  return response;
};

export default requestApi;
