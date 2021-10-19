import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApiThunk from '../actions/fetchApiAction';
import FormCurrencies from './FormCurrencies';

class FormWallet extends Component {
  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
          />
        </label>
        <FormCurrencies />
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToprops = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApiThunk()),
});

FormWallet.propTypes = ({
  setFetchApi: PropTypes.func.isRequired,
});

export default connect(mapStateToprops, mapDispatchToProps)(FormWallet);
