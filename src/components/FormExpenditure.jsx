import React, { Component } from 'react';
import SelectCoin from './Expenditure_components/SelectCoin';

class FormExpenditure extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, description: desc, method, tag } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" name="value" onChange={ this.handle } value={ value } />
          </label>

          <label htmlFor="desc">
            Descrição
            <input id="desc" name="description" onChange={ this.handle } value={ desc } />
          </label>

          <SelectCoin handle={ this.handle } value={ currency } />

          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method" onChange={ this.handle } value={ method }>
              <option value="money">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" onChange={ this.handle } value={ tag }>
              <option value="alimentation">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="cheers">Saúde</option>
            </select>
          </label>

        </form>
      </section>
    );
  }
}

export default FormExpenditure;
