import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PaymentMethod from './PaymentMethod';
import Tag from './Tag';
import Input from './Input';
import { fetchCurrency, expenseAction } from '../actions/index';

class FormWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  async handleClick(event) {
    event.preventDefault();
    const { expAction } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: responseJson,
    };

    expAction(expenses);

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          label="Valor:"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição:"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((option, i) => <option key={ i }>{ option }</option>)}
          </select>
        </label>
        <PaymentMethod
          label="Método de pagamento:"
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        />
        <Tag
          label="Tag:"
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormWallet.propTypes = {
  expAction: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrency()),
  expAction: (payload) => dispatch(expenseAction(payload)),
});

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
