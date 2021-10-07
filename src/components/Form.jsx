import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.generateMethods = this.generateMethods.bind(this);
    this.generateTags = this.generateTags.bind(this);
  }

  generateMethods() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return methods.map((method, index) => (
      <option key={ index } value={ method }>{method}</option>
    ));
  }

  generateTags() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((tag, index) => (
      <option key={ index } value={ tag }>{tag}</option>
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
            name="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            type="text"
            id="descrição"
            name="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="moeda"
          >
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            id="method"
            name="method"
          >
            { this.generateMethods() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
          >
            { this.generateTags() }
          </select>
        </label>
      </form>
    );
  }
}

export default connect()(Form);
