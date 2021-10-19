import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoriesTags = this.categoriesTags.bind(this);
  }

  paymentMethods() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return methods.map((method, index) => (
      <option value={ method } key={ index }>{method}</option>
    ));
  }

  categoriesTags() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option value={ tag } key={ index }>{ tag }</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            type="text"
            name="descrição"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
            id="moeda"
          >
            { this.paymentMethods() }
          </select>
        </label>
        <label htmlFor="tags">
          Categoria:
          <select
            name="tags"
            id="tags"
          >
            { this.categoriesTags() }
          </select>
        </label>
      </form>
    );
  }
}

export default connect()(Form);
