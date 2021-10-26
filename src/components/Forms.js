import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenses } from '../actions';
import Tag from './Tag';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async submitForm(event) {
    event.preventDefault();
    const { totalExpenses } = this.props;
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    this.setState({
      id: id + 1,
      exchangeRates: response,
    });
    console.log(id, value, description, currency, method, tag, exchangeRates);
    const formsState = this.state;
    const { setForm } = this.props;
    setForm(formsState);
    totalExpenses();
  }

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.submitForm }>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="value"
            id="valor"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="description"
            id="descricao"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="currency" id="moeda" onChange={ this.handleChange }>
            {currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="metodo-pagamento">
          Método de pagamento:
          <select name="method" id="metodo-pagamento" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <Tag handleChange={ this.handleChange } />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setForm: (formsState) => dispatch(expenses(formsState)),
});

Forms.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalExpenses: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
