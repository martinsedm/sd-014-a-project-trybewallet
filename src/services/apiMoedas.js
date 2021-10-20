const apiMoeda = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const endpoint = await fetch(url).then((response) => response.json());
  return endpoint;
};

export default apiMoeda;
