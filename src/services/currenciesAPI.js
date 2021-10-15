const currenciesAPI = async () => {
  const apiUrl = 'https://economia.awesomeapi.com.br/json/all';
  const endPoint = await fetch(apiUrl);
  const response = await endPoint.json();
  return response;
};

export default currenciesAPI;

// const getMusics = async (id) => {
//   const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
//   const requestJson = await request.json();
//   return requestJson.results;
// };

// export getMusics;
