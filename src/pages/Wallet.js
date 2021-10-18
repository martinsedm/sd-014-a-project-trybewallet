import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Select from '../components/Select';
import Input from '../components/Input';
import { filtered, addExpense, getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { handleCurrencies } = this.props;
    handleCurrencies();
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const { handleExpenses, currencies, handleCurrencies } = this.props;
    handleCurrencies();
    handleExpenses({ ...this.state, exchangeRates: currencies });
  }

  renderSelects() {
    const {
      currency,
      method,
      tag,
    } = this.state;
    const { load, currencies } = this.props;
    const currencyOptions = filtered(currencies);
    return (
      <>
        <Select
          label="Moeda"
          name="currency"
          options={ currencyOptions }
          value={ currency }
          load={ load }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  render() {
    const {
      value,
      description,
    } = this.state;
    return (
      <body>
        <Header />
        <form
          onSubmit={ this.handleClick }
        >
          <Input
            label="Valor"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            label="Descrição"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          { this.renderSelects() }
          <button type="submit">Adicionar despesa</button>
        </form>
      </body>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  load: wallet.load,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleCurrencies: () => dispatch(getCurrencies()),
  handleExpenses: (expense) => dispatch(addExpense(expense)),
});

Wallet.propTypes = {
  handleCurrencies: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
