// import pegarMoedas from "../services/awesomeapi";

export const ADD_USER = 'ADD_USER';
export const CHANGE_DESPESA = 'CHANGE_DESPESA';
export const CHANGE_CAMBIO = 'CHANGE_CAMBIO';
export const CHANGE_EXPENSES = 'CHANGE_EXPENSES';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: {
    email,
  },
});

export const changeDespesa = (despesa) => ({
  type: CHANGE_DESPESA,
  payload: {
    despesa,
  },
});

export const changeCambio = (cambio) => ({
  type: CHANGE_CAMBIO,
  payload: {
    cambio,
  },
});

export const changeExpenses = (expenses) => ({
  type: CHANGE_EXPENSES,
  payload: {
    expenses,
  },
});

// export const pegarMoedasThunk = () => async (dispatch) => {
//   const resposta = await pegarMoedas();
//   const payload = {

//   } b
