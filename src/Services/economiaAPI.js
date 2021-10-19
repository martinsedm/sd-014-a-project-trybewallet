const requisicaoAPI = async () => {
  try {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await endpoint.json();
    delete response.USDT;
    return response;
  } catch (e) {
    console.log(e);
  }
};

export default requisicaoAPI;
