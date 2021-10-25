// const getCurrencyAPI = async () => {
//   const api = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const response = await api.json();
//   return response;
// };

const getCurrencyAPI = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrencyAPI;
