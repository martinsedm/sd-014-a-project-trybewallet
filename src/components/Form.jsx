import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoryTypes = this.categoryTypes.bind(this);
  }

  paymentMethods() {
    const arrayMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return arrayMethods.map((method, index) => (
      <option value={ method } key={ index }>{ method }</option>
    ));
  }

  categoryTypes() {
    const arrayCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return arrayCategories.map((category, index) => (
      <option value={ category } key={ index }>{ category }</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            type="text"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
          >
            requisita API
          </select>
        </label>
        <label htmlFor="payment-methods">
          Método de Pagamento:
          <select
            id="payment-methods"
            name="payment-methods"
          >
            { this.paymentMethods() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
          >
            { this.categoryTypes() }
          </select>
        </label>
      </form>
    );
  }
}

export default connect()(Form);
