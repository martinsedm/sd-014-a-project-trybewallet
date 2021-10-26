import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses, fetchApiThunk } from '../actions/fetchApiAction';
import FormCurrencies from './FormCurrencies';
import { getCurrentApi } from '../services/fetchAPI';
import TagForm from './TagForm';

class FormWallet extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  async handleClick() {
    const { addExpenses } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const response = await getCurrentApi();

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: response,
    };
    addExpenses(expenses);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    const { sumCurrencies } = this.props;
    sumCurrencies();
  }

  render() {
    const { value, description, method } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ this.handleChange }
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <FormCurrencies handleChange={ this.handleChange } />
        <label htmlFor="payment">
          Método de pagamento:
          <select
            id="payment"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <TagForm handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchApiThunk()),
  addExpenses: (payload) => dispatch(getExpenses(payload)),
});

FormWallet.propTypes = ({
  sumCurrencies: PropTypes.func.isRequired,
  fetchAPI: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(FormWallet);
