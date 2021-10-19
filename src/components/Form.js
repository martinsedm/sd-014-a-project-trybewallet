import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../services/walletAPI';

class Form extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  currenciesOptions() {
    const { currencies } = this.props;
    console.log(currencies[0]);
    return currencies.map((currencie) => (
      <option key={ currencie } value={ currencie }>{ currencie }</option>));
  }

  render() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <textarea name="descricao" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            { this.currenciesOptions() }
          </select>
        </label>

        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento">
            { payMethods.map((payMethod) => (
              <option key={ payMethod } name={ payMethod } value={ payMethod }>
                { payMethod }
              </option>
            )) }
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            { tags.map((tag) => (
              <option key={ tag } name={ tag } value={ tag }>
                { tag }
              </option>
            )) }
          </select>
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};
