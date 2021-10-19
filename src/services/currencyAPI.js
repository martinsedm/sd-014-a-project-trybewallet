const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyApi = () => (
  fetch(endpoint)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json)
          : Promise.reject(json)))
    ))
);

export default getCurrencyApi;
