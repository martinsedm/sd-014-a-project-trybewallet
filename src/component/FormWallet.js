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
    const methods = ['Dineheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select
          name="method"
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
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          value={ currency }
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
    const tags = ['Alimnentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
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
          <label htmlFor="value">
            Valor
            <input
              type="number"
              name="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
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
