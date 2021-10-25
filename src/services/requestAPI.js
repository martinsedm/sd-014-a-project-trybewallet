const requestFetch = async () => {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseFetch = await fetchApi.json();
  // const coins = Object.keys(responseFetch);
  return responseFetch;
};

export const methodList = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

export default requestFetch;
