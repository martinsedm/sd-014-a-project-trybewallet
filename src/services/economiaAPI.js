const ECONOMIA_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

// const getApiEconomia = () => (
//   fetch(ECONOMIA_BASE_API).then((response) => (
//     response.json()
//       .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//   ))
// );

const getApiEconomia = async () => {
  const response = await fetch(ECONOMIA_BASE_API);
  return (
    response.ok ? Promise.resolve(response.json()) : Promise.reject(response.json()));
};

export default getApiEconomia;
