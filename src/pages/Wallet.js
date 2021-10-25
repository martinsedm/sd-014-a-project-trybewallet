import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-container">
        <Header />
        <form>
          <label htmlFor="wallet-value">
            Valor
            <input type="text" id="wallet-value" />
          </label>
          <label htmlFor="wallet-description">
            Descrição
            <input type="text" id="wallet-description" />
          </label>
          <label htmlFor="wallet-currency">
            Moeda
            <select type="text" id="wallet-currency">
              {/* <option value="moeda" /> */}
            </select>
          </label>
          <label htmlFor="wallet-payment">
            Método de pagamento
            <select type="text" id="wallet-payment">
              <option value="wallet-payment-money">Dinheiro</option>
              <option value="wallet-payment-credit">Cartão de crédito</option>
              <option value="wallet-payment-debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="wallet-tag">
            Tag
            <select type="text" id="wallet-tag">
              <option value="wallet-tag-food">Alimentação</option>
              <option value="wallet-tag-fun">Lazer</option>
              <option value="wallet-tag-work">Trabalho</option>
              <option value="wallet-tag-transport">Transporte</option>
              <option value="wallet-tag-health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
