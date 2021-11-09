import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" type="select" name="currency">
              <option>moeda</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" name="payment">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
