// Coloque aqui suas actions do usuario.
export const INFOR_USUARIO = 'INFOR_USUARIO';
export const VALOR_MOEDAS = 'VALOR_MOEDAS';

export const inforUsuarioAction = (email) => ({
  type: INFOR_USUARIO,
  email,
});

export const definirValorMoedasAction = (currencies) => ({
  type: VALOR_MOEDAS,
  currencies,
});

export const fetchAPIMoeda = () => async (dispatch) => {
  const respostaAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const repostaAPIJSON = await respostaAPI.json();
  const moedas = Object.keys(repostaAPIJSON).filter((currency) => currency !== 'USDT');
  dispatch(definirValorMoedasAction(moedas));
};
