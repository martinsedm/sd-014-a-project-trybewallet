import React, { Component } from 'react';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      // value: 0,
      // description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };
  }

  renderMethod() {
    const { method } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method-input">
        Método de Pagamento
        <select
          id="method-input"
          value={ method }
        >
          { methods.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }

        </select>
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const currencys = ['USD', 'ATF', 'KJD'];
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          value={ currency }
          id="currency-input"
        >
          { currencys.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag-input">
        Tag
        <select
          value={ tag }
          id="tag-input"
        >
          { tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              type="number"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              id="description-input"
            />
          </label>
          { this.renderCurrency() }
          { this.renderMethod() }
          { this.renderTag() }
        </form>
      </div>
    );
  }
}

export default FormWallet;
