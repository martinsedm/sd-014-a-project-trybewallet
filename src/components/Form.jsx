import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
    this.paymentMethods = this.paymentMethods.bind(this);
    this.categoryTypes = this.categoryTypes.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
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
    const { currencies } = this.props;
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
            { currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
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

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
