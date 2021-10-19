export default async function chamarAPI() {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonFetch = await fetchAPI.json();
  return jsonFetch;
}
