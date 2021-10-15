import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" name="name" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" name="name" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select name="moeda" id="moeda">
              {/* <option value=""></option> */}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select name="pagamento" id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Tag:
            <select name="pagamento" id="pagamento">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Form;
