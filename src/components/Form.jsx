import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseThunk, fetchAPI } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    return this.setState({ [name]: value });
  }

  handleClick(event) {
    const { newExpense } = this.props;
    event.preventDefault();
    newExpense(this.state);
    let { id } = this.state;
    id += 1;
    this.setState({
      id,
    });
    console.log(id);
  }

  createInput(type, id, value) {
    return (
      <input
        type={ type }
        name={ id }
        id={ id }
        onChange={ this.handleChange }
        value={ value }
      />
    );
  }

  handleSubmit() {
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        Adicionar despesa
      </button>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de Pagamento
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
    );
  }

  render() {
    const { value, description, currency, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          {this.createInput('number', 'value', value)}
        </label>
        <label htmlFor="description">
          Descrição
          {this.createInput('text', 'description', description)}
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            )) }
          </select>
        </label>
        {this.renderMethod()}
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {this.handleSubmit()}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  newExpense: (expense) => dispatch(addExpenseThunk(expense)),
});

// const mapStateToProps = (state) => ({
//   currencies: state.wallet.currencies,
// });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
