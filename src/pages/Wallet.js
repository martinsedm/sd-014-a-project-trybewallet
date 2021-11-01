// Informações da Página da Carteira.
import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          Carteira
          <Header />
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descricao
            <input type="text" name="descricao" id="descricao" />
          </label>
          <label htmlFor="moeda">
            <select id="payment">vazio</select>
          </label>
          <label htmlFor="metodoPagamento">
            Método de pagamento
            <select id="metodoPagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
