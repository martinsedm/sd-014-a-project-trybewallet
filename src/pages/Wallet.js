import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, getCoin } from '../actions';
import Inputs from '../walletComponents/Inputs';
import Selector from '../walletComponents/Selector';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: {
        value: '',
        description: '',
        currency: 'USD',
        method: 'dinheiro',
        tag: 'Alimentação',
      },
      addButton: true,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderFieldset = this.renderFieldset.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.totalExpenses = this.handleExpenses.bind(this);
    this.handleExpenses = this.handleExpenses.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  componentDidUpdate() {
    this.totalExpenses();
  }

  getCurrency() {
    const { fetchOptions } = this.props;
    fetchOptions();
  }

  handleExpenses() {
    const { dispatchExpenses } = this.props;
    const { expenses } = this.state;

    const inicialState = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
    };

    dispatchExpenses(expenses);
    this.setState({ expenses: inicialState });
  }

  handleButton() {
    const { expenses: { value, description } } = this.state;
    return value && description
      ? this.setState({ addButton: false }) : this.setState({ addButton: true });
  }

  handleChange({ target }) {
    const { expenses } = this.state;
    const { id, value } = target;
    this.setState({ expenses: {
      ...expenses,
      [id]: value,
    } });
    this.handleButton();
  }

  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((itemAcc, item) => {
      const convertionValue = item.exchangeRates[item.currency].ask;
      itemAcc += item.value * convertionValue;
      return itemAcc;
    }, 0).toFixed(2);
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">
          {this.totalExpenses()}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }

  renderFieldset() { // diminuir o tamanho do state;
    const { currencies } = this.props;
    const { expenses } = this.state;
    return (
      <fieldset>
        <legend>Wallet</legend>
        <Inputs
          value={ expenses.value }
          labelText="Valor:"
          id="value"
          onChange={ this.handleChange }
        />
        <Inputs
          value={ expenses.description }
          labelText="Descrição:"
          id="description"
          onChange={ this.handleChange }
        />
        <Selector
          labelText="Moeda:"
          id="currency"
          ariaLabel="moeda"
          onChange={ this.handleChange }
          currencies={ currencies }
        />
        <label htmlFor="method">
          Método de pagamento:
          <select
            onChange={ this.handleChange }
            aria-label="método de pagamento"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    const { addButton } = this.state;
    return (
      <>
        {this.renderHeader()}
        {this.renderFieldset()}
        <button
          onClick={ this.handleExpenses }
          type="button"
          disabled={ addButton }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

// Pega da store o email para mostrar no header;
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOptions: () => dispatch(getCoin()),
  dispatchExpenses: (payload) => dispatch(addExpense(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  fetchOptions: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
