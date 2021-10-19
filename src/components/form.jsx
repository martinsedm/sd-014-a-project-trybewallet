import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, getExpense } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);

    this.state = {
      method: '',
      currency: '',
      tag: '',
      value: 0,
      description: '',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchCurrencyThunk } = this.props;
    fetchCurrencyThunk();
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();

    this.setState({ exchangeRates: responseJson });
  }

  handleChange({ target: { value, id } }) {
    this.setState({ [id]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { setExpense } = this.props;
    await this.fetchCurrency();
    await setExpense(this.state);
  }

  renderSelect() {
    const { currencies } = this.props;
    const { tag, method, currency } = this.state;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencies.map((item) => (
              <option key={ item } value={ item }>{item }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            htmlFor="method"
            id="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro" id="method">Dinheiro</option>
            <option value="Cartão de crédito" id="method">Cartão de crédito</option>
            <option value="Cartão de débito" id="method">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            htmlFor="tag"
            id="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação" id="tag">
              Alimentação
            </option>
            <option value="Lazer" id="tag">Lazer</option>
            <option value="Trabalho" id="tag">Trabalho</option>
            <option value="Transporte" id="tag">Transporte</option>
            <option value="Saúde" id="tag">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelect()}
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">Adicionar Despesa</button>

      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencyThunk: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpense: (value) => dispatch(getExpense(value)),
  fetchCurrencyThunk: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
