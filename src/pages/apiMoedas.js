async function getAPI() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJson = await response.json();
  return console.log(responseJson);
}

export default getAPI;
