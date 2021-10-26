const fetchAPI = async () => {
  const midpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await midpoint.json();
  return data;
};

export default fetchAPI;
