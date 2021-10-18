import React, { Component } from 'react';

class Form extends Component {
  render() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <textarea name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            empty
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento">
            { payMethods.map((payMethod) => (
              <option key={ payMethod } name={ payMethod } value={ payMethod }>
                { payMethod }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            { tags.map((tag) => (
              <option key={ tag } name={ tag } value={ tag }>
                { tag }
              </option>
            )) }
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
