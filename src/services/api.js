const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchApi() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
