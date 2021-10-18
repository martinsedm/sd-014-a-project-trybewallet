import React, { Component } from 'react';

class FormExpenditure extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      coin: '',
      desc: '',
      payment: '',
      tag: '',
    };
    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, coin, desc, payment, tag } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" name="value" onChange={ this.handle } value={ value } />
          </label>

          <label htmlFor="desc">
            Descrição
            <input id="desc" name="desc" onChange={ this.handle } value={ desc } />
          </label>

          <label htmlFor="coin">
            Moeda
            <select id="coin" name="coin" onChange={ this.handle } value={ coin }>
              <option value="moeda">moeda</option>
            </select>
          </label>

          <label htmlFor="pay">
            Método de pagamento
            <select id="pay" name="payment" onChange={ this.handle } value={ payment }>
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
