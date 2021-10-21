import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from './Input';
import Select from './Select';
import { addExpenses, fetchCurrency } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'BRL',
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

    const { addExpense } = this.props;
    const exchangeRates = await fetchCurrency();
    this.setState({ exchangeRates });
    addExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input
            htmlFor="value"
            label="Valor:"
            testid="value-input"
            type="number"
            onChange={ this.handleChange }
          />
          <Input
            htmlFor="description"
            label="Descrição:"
            testid="description-input"
            type="text"
            onChange={ this.handleChange }
          />
          <Select
            htmlFor="currency"
            label="Moeda:"
            testid="currency-select"
            onChange={ this.handleChange }
            options={ currencies }
          />
          <Select
            htmlFor="method"
            label="Método de pagamento:"
            testid="payment-select"
            onChange={ this.handleChange }
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            htmlFor="tag"
            label="Tag:"
            testid="tag-select"
            onChange={ this.handleChange }
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
          <button type="submit">Adicionar despesa</button>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
