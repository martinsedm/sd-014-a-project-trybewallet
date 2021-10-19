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
// Source: 'https://github.com/tryber/sd-013-b-live-lectures/pull/43/files'
