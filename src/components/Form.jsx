import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoriesTags = this.categoriesTags.bind(this);
    this.mapCurrencies = this.mapCurrencies.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  mapCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency, index) => (
      <option value={ currency } key={ index }>{currency}</option>
    ));
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
            { this.mapCurrencies() }
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento:
          <select
            name="Método de pagamento"
            id="Método de pagamento"
          >
            { this.paymentMethods() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            id="tag"
          >
            { this.categoriesTags() }
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

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
