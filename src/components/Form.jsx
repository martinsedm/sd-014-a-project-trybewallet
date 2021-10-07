import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.generateMethods = this.generateMethods.bind(this);
    this.generateTags = this.generateTags.bind(this);
    this.generateCurrencies = this.generateCurrencies.bind(this);
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

  generateCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency, index) => (
      <option key={ index } value={ currency }>{currency}</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
          >
            { this.generateCurrencies() }
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

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
