const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchApi;
