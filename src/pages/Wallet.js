import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="value-debt">
            Valor
            <input type="text" name="valor" id="value-debt" />
          </label>
          <label htmlFor="value-desc">
            Descrição
            <input type="text" name="valor" id="value-desc" />
          </label>
          <label htmlFor="value-moeda">
            Moeda
            <select id="value-moeda">
              <option> a </option>
            </select>
          </label>
          <label htmlFor="value-metodo">
            Método de pagamento
            <select id="value-metodo">
              <option> Dinheiro </option>
              <option> Cartão de crédito </option>
              <option> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="value-type">
            Tag
            <select id="value-type">
              <option> Alimentação </option>
              <option> Lazer </option>
              <option> Trabalho </option>
              <option> Transporte </option>
              <option> Saúde </option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
