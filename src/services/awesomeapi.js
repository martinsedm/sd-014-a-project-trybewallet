const fetchAPI = async () => {
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resolve = await endpoint.json();
  return resolve;
};

export default fetchAPI;
