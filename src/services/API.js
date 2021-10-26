const fetchAPI = async () => {
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await endpoint.json();
  return data;
};

export default fetchAPI;
