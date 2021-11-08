export const SAVE_PERSONAL_EMAIL = 'SAVE_PERSONAL_EMAIL';
export const CURRENT_WALLET = 'CURRENT_WALLET';
export const SAVE_ACTUAL_EXPENSE = 'SAVE_ACTUAL_EXPENSE';

export const savePersonalEmail = (payload) => ({
  type: SAVE_PERSONAL_EMAIL,
  payload,
});

export const saveExpense = (expense) => ({
  type: SAVE_ACTUAL_EXPENSE,
  expense,

});

export function getExchangeRate(expense) {
  return async (dispatch) => {
    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getApi.json();
    expense.exchangeRates = response;

    dispatch(saveExpense(expense));
  };
}

// salvar a dispesa  no  estado global (redux).
// para cada despesa teremos um id.
// no momento da adiçao, salvar o campio atual , na chave exchangeRates.
// apos adicionar , somar as despesas totais, e mostrar no header.
