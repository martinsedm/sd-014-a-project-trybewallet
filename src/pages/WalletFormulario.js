import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchMoedas } from '../actions';

class WalletFormulario extends React.Component {
  constructor() {
    super();
    this.tagDoFormulario = this.tagDoFormulario.bind(this);
    this.optionsMoedas = this.optionsMoedas.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  optionsMoedas() {
    const { currencies } = this.props;

    return currencies.filter((currency) => currency !== 'USDT')
      .map(((currency) => (
        <option key={ currency } value={ currency }>{currency}</option>
      )));
  }

  tagDoFormulario() {
    return (
      <label htmlFor="Tag">
        Tag:
        <select id="Tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>);
  }

  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="number" id="Valor" />
        </label>

        <label htmlFor="Descrição">
          Descrição:
          <input type="text" id="Descrição" />
        </label>

        <label htmlFor="moeda">
          Moedas:
          <select id="moeda">
            { this.optionsMoedas()}
          </select>
        </label>

        <label htmlFor="Pagamento">
          Método De Pagamento:
          <select id="Pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        {this.tagDoFormulario()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(FetchMoedas()),
});

WalletFormulario.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletFormulario);
