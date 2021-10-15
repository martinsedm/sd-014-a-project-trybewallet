const currenciesAPI = async () => {
  const apiUrl = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(apiUrl).then((resp) => resp.json);
  return response;
};

export default currenciesAPI;

// const getMusics = async (id) => {
//   const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
//   const requestJson = await request.json();
//   return requestJson.results;
// };

// export getMusics;
