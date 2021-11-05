import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="input-value">
            Valor:
            <input
              type="number"
              name="value"
              id="input-value"
            />
          </label>
          <label htmlFor="input-description">
            Descrição:
            <input
              type="text"
              name="description"
              id="input-description"
            />
          </label>
          <label htmlFor="select-currency">
            Moeda:
            <select name="currency" id="select-currency">
              {/* moedas API */}
            </select>
          </label>
          <label htmlFor="select-payment">
            Método de pagamento:
            <select name="payment" id="select-payment">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debt">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="category" id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default ExpensesForm;
