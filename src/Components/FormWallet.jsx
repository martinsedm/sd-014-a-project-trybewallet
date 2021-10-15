import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../actions';
import Select from './Select';
import Input from './Input';

// expenses: [{
//   "id": 0,
//   "value": "3",
//   "description": "Hot Dog",
//   "currency": "USD",
//   "method": "Dinheiro",
//   "tag": "Alimentação",
//   "exchangeRates": {
//     "USD": {
//       "code": "USD",
//       "name": "Dólar Comercial",
//       "ask": "5.6208",
//       ...
//     },
//     "CAD": {
//       "code": "CAD",
//       "name": "Dólar Canadense",
//       "ask": "4.2313",
//       ...
//     },
// }]

class FormWallet extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      value: 0,
      description: '',
      currency: 'USD',
      tag: 'Alimentação',
      pagamento: 'Dinheiro',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    await this.convertWalletPropToArray();
  }

  convertWalletPropToArray() {
    const { wallet } = this.props;
    const walletArray = Object.keys(wallet);
    const walletFiltered = walletArray.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: walletFiltered,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const valuesOfTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const valuesOfPagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies, value, description } = this.state;
    return (
      <form>
        <Input
          id="value"
          onChange={ this.handleChange }
          type="number"
          value={ value }
          labelText="Valor"
        />
        <Input
          id="description"
          onChange={ this.handleChange }
          type="text"
          value={ description }
          labelText="Descrição"
        />
        <Select
          values={ currencies }
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          labelText="Moeda"
        />
        <Select
          values={ valuesOfPagamento }
          id="pagamento"
          onChange={ this.handleChange }
          labelText="Método de pagamento"
        />
        <Select
          values={ valuesOfTag }
          id="tag"
          onChange={ this.handleChange }
          labelText="Tag"
        />
        <button type="button">Adicionar despesa</button>
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
  wallet: PropTypes.func.isRequired,
};
