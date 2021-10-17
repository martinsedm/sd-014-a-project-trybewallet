import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            {'Valor: '}
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="desc">
            {'Descrição: '}
            <input type="text" name="desc" id="desc" />
          </label>
          <label htmlFor="moeda">
            {'Moeda: '}
            <select name="moeda" id="moeda">
              <option>BRL</option>
            </select>
          </label>
          <label htmlFor="pag">
            {'Método de pagamento: '}
            <select name="pag" id="pag">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            {'Tag: '}
            <select name="tag" id="tag">
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
