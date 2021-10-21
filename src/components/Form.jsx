import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, fetchCurrency } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

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

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
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
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencies
              .map((currency) => (
                <option
                  key={ currency }
                  value={ currency }
                >
                  { currency }
                </option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
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
