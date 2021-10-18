import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        TrybeWallet
        <form>
          <label htmlFor="expenses">
            Valor
            <input type="text" id="expenses" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {/* <option value="currency">API</option> */}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food-expenses">Alimentação</option>
              <option value="recreation-expenses">Lazer</option>
              <option value="job-expenses">Trabalho</option>
              <option value="transport-expenses">Transporte</option>
              <option value="healthcare-expenses">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default Wallet;
