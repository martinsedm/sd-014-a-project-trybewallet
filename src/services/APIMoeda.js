// Fazendo uma requisição na API de Moeda e me retorna todas as informações da API em formado de JSON.

const endpointAPI = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPIMoeda = () => (
  fetch(endpointAPI)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json)
          : Promise.reject(json)))
    ))
);

export default fetchAPIMoeda;
