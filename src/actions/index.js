import requestApi from '../Utility';

export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const SEND_CURRENCY = 'SEND_CURRENCY';
// Action para enviar as informações das moedas para o estado global
export const sendCurrency = (response) => ({
  type: SEND_CURRENCY,
  payload: response,
});

export const SEND_VALUE_EXPENSES = 'SEND_VALUE_EXPENSES';
export const sendValuesExpenses = (arrayLocalState) => ({
  type: SEND_VALUE_EXPENSES,
  payload: arrayLocalState,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  payload: expenses,
});

// como se trata de uma action assincrona, uso o thunk.
// dentro dele eu pego a resposta e guardo numa variável de forma assincrona
// em seguida uso o dispatch passando a minha action como paramentro
// e a minha resposta assincrona como parametro da action
export const sendCurrencyThunk = () => async (dispatch) => {
  const responseThunk = await requestApi();
  dispatch(sendCurrency(responseThunk));
};

// tive que fazer um thunk para poder lidar com a informação da API que preciso
// no primeiro parâmetro eu quero passar o meu estado com as despesas.
// esse estado é passado como paramentro lá no Form dentro do handleClick no funcção que criei como prop desse thunk
// dispacho minha action com o meu estado e uma nova chave que guarda as informações da api

export const expenseThunk = (despesas) => async (dispatch) => {
  const responseThunk = await requestApi();
  dispatch(sendValuesExpenses({ ...despesas, exchangeRates: responseThunk }));
};
