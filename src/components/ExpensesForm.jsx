import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paymentMethod, tags } from '../data';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import { fetchAPI } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      describe: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  createPaymentOptions() {
    return paymentMethod.map((method) => (
      <option value={ method } key={ method }>{ method }</option>
    ));
  }

  createtagOptions() {
    return tags.map((tag) => (
      <option value={ tag } key={ tag }>{ tag }</option>
    ));
  }

  render() {
    const { value, describe, currency, payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <InputForm name="value" value={ value } change={ this.handleChange } />
        <InputForm name="describe" value={ describe } change={ this.handleChange } />
        <SelectForm
          name="currency"
          value={ currency }
          type="Moeda"
          change={ this.handleChange }
          options={ currencies }
        />
        <SelectForm
          name="payment"
          value={ payment }
          type="Método de pagamento"
          change={ this.handleChange }
          options={ paymentMethod }
        />
        <SelectForm
          name="tag"
          value={ tag }
          type="tag"
          change={ this.handleChange }
          options={ tags }
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
