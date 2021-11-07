import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FetchMoedas, addExpense } from '../actions';

class WalletFormulario extends React.Component {
  constructor() {
    super();
    this.state = {
      tag: 'Alimentação',
      method: 'Dinheiro',
      value: '',
      description: '',
      currency: 'USD',
    };
    this.tagDoFormulario = this.tagDoFormulario.bind(this);
    this.optionsMoedas = this.optionsMoedas.bind(this);
    this.HC = this.HC.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  submitExpense(event) {
    event.preventDefault();
    const { setExpense } = this.props;
    setExpense(this.state);
  }

  optionsMoedas() {
    const { currencies } = this.props;

    return currencies.filter((currency) => currency !== 'USDT')
      .map(((currency) => (
        <option key={ currency } value={ currency }>{currency}</option>
      )));
  }

  HC({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  tagDoFormulario() {
    const { tag, method } = this.state;
    return (
      <>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" value={ tag } onChange={ this.HC }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="method">
          Método De Pagamento:
          <select id="method" name="method" value={ method } onChange={ this.HC }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { value, description, currency } = this.state;
    return (
      <form onSubmit={ this.submitExpense }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.HC }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.HC }
          />
        </label>

        <label htmlFor="currency">
          Moedas:
          <select id="currency" name="currency" value={ currency } onChange={ this.HC }>
            { this.optionsMoedas()}
          </select>
        </label>

        {this.tagDoFormulario()}
        <button
          type="submit"
        >
          Adicionar Despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(FetchMoedas()),
  setExpense: (expense) => dispatch(addExpense(expense)),
});

WalletFormulario.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCurrencies: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletFormulario);
