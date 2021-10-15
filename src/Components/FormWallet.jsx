import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../actions';

class FormWallet extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    await this.convertWalletPropToArray();
  }

  convertWalletPropToArray() {
    const { wallet } = this.props;
    const walletArray = Object.entries(wallet);
    const walletFiltered = walletArray.filter((currency) => currency[0] !== 'USDT');
    this.setState({
      currencies: walletFiltered,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="input-valor">
          valor:
          <input type="number" id="input-valor" />
        </label>
        <label htmlFor="input-descricao">
          Descrição:
          <input type="text" id="input-descricao" />
        </label>
        <label htmlFor="select-moeda">
          Moeda:
          <select id="select-moeda">
            { currencies.map((currency) => (
              <option key={ currency[0] } value={ currency[0] }>{ currency[0] }</option>
            )) }
          </select>
        </label>
        <label htmlFor="select-pagamento">
          Método de pagamento
          <select id="select-pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  wallet: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);

FormWallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};
