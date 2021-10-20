import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, sendExpense } from '../actions';
import Input from './Input';
import Select from './Select';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { sendNewExpense } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    await delete currencies.USDT;
    this.setState({ exchangeRates: currencies }, () => {
      const { value, description, currency, method, tag, exchangeRates } = this.state;
      sendNewExpense({ value, description, currency, method, tag, exchangeRates });
    });
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (
      <form className="flex justify-center space-x-4">
        <Input
          id="valor"
          name="value"
          labelText="Valor: "
          handleChange={ this.handleChange }
        />
        <Input
          id="descrição"
          name="description"
          labelText="Descrição: "
          handleChange={ this.handleChange }
        />
        <Select
          id="moeda"
          name="currency"
          labelText="Moeda: "
          handleChange={ this.handleChange }
          array={ currencies }
        />
        <Select
          id="pagamento"
          name="method"
          labelText="Método de pagamento: "
          handleChange={ this.handleChange }
          array={ paymentMethods }
        />
        <Select
          id="tag"
          name="tag"
          labelText="Tag: "
          handleChange={ this.handleChange }
          array={ tags }
        />
        <button
          type="button"
          className="mx-5 px-5 py-1.5 bg-green-300 rounded opacity-50 hover:opacity-100"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormWallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  sendNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  sendNewExpense: (payload) => dispatch(sendExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
