import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpense } from '../redux/actions';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
      exchangeRates: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    document.title = 'TrybeWallet-Wallet';
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  handleChange({ target: { name, value } }) {
    console.log(name);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { dispatchExpense } = this.props;
    console.log(this.state);
    // const { value, description, currency, method, tag, id, exchangeRates } = this.state;
    event.preventDefault();
    dispatchExpense(this.state);
  }

  render() {
    const { currencies, email, totalExpenses = 0 } = this.props;
    return (
      <>
        <h1>Wallet</h1>
        <Header email={ email } totalExpenses={ totalExpenses } currency="BRL" />
        <WalletForm
          currenciesCodes={ Object.keys(currencies).filter((curr) => curr !== 'USDT') }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
          selected={ this.state }
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return ({
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
    email: state.user.email,
    totalExpenses: state.wallet.totalExpenses,
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchCurrencies: () => dispatch(fetchCurrencies()),
    dispatchExpense: (expense) => dispatch(addExpense(expense)),
  });
}

Wallet.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
