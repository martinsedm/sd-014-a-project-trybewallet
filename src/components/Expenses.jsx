import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getExpenses as getExpensesAction } from '../actions';
import currencyAPI from '../services/currencyAPI';
import Input from './Input';
import Select from './Select';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { getExpenses } = this.props;
    const exchangeRates = await currencyAPI();
    this.setState({ exchangeRates });
    getExpenses(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          label="Valor"
          type="number"
          name="value"
          htmlFor="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          htmlFor="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          htmlFor="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          htmlFor="method"
          value={ method }
          options={ methods }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          htmlFor="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (expenses) => dispatch(getExpensesAction(expenses)),
});

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
