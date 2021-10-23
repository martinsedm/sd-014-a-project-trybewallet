import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectCurrency from './SelectCurrency';
import { actionAddExpenses } from '../actions';
import getCurrencyApi from '../services/currencyAPI';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { addExpenses } = this.props;
    const exchangeRates = await getCurrencyApi();
    this.setState({
      exchangeRates,
    });
    addExpenses(this.state);
  }

  renderSelect() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>

        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <SelectCurrency handleChange={ this.handleChange } />
        { this.renderSelect() }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>

    );
  }
}

WalletForm.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(actionAddExpenses(expenses)),
});

export default connect(null, mapDispatchToProps)(WalletForm);
