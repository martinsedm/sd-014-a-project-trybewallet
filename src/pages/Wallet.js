import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" value="" onChange="" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" value="" onChange="" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" onChange="" id="moeda">
              <option value="">Selecione uma moeda</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select name="pagamento" onChange="" id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao de crédito">Cartão de crédito</option>
              <option value="cartao de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" onChange="" id="tag">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
