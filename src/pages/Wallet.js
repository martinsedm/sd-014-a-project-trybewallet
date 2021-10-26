import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'TrybeWallet-Wallet';
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  render() {
    const { currencies, expenses, email } = this.props;
    console.log(currencies);
    console.log(expenses);
    return (
      <>
        <h1>Wallet</h1>
        <Header email={ email } totalExpense={ 0 } currency="BRL" />
      </>
    );
  }
}

function mapStateToProps(state) {
  return ({
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
    email: state.user.email,
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchCurrencies: () => dispatch(fetchCurrencies()),
  });
}

Wallet.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
