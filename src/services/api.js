export async function getValue() {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await fetchApi.json();
  return json;
}

export default getValue;
