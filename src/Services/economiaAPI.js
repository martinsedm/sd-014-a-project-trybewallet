export default requisicaoAPI = async () => {
  try {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await endpoint.json();
    const data = response;
    return data;
  } catch (e) {
    console.log(e);
  }
};
